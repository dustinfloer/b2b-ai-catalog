#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const TOOLS_DIR = path.join(ROOT, 'tools');
const DOCS_DIR = path.join(ROOT, 'docs');

const VALID_CATEGORIES = new Set(['Tools', 'Simulations', 'References', 'Workflows', 'Guides']);
const VALID_AUDIENCES = new Set(['SE-facing', 'Merchant-facing', 'Both']);
const VALID_STATUSES = new Set(['draft', 'active', 'needs_review', 'stale', 'deprecated']);
const VALID_ACCESS_LEVELS = new Set(['internal', 'external', 'mixed']);

const TOOL_REQUIRED_FIELDS = [
  'name',
  'description',
  'url',
  'category',
  'built_with',
  'audience',
  'author',
  'author_slack',
  'date_added',
  'status',
  'access_level',
  'source_of_truth',
  'reviewed_by',
  'last_reviewed',
  'review_cycle_days',
];

const errors = [];
const warnings = [];

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;

  const frontmatter = {};
  match[1].split('\n').forEach((line) => {
    const idx = line.indexOf(':');
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    frontmatter[key] = value;
  });

  return frontmatter;
}

function isDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) return false;
  const parsed = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}

function daysSince(value) {
  const reviewed = new Date(`${value}T00:00:00Z`);
  const now = new Date();
  return Math.floor((now - reviewed) / (1000 * 60 * 60 * 24));
}

function isHttpsUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:';
  } catch (_e) {
    return false;
  }
}

function addError(scope, message) {
  errors.push(`${scope}: ${message}`);
}

function addWarning(scope, message) {
  warnings.push(`${scope}: ${message}`);
}

function readJson(relativePath) {
  const fullPath = path.join(ROOT, relativePath);
  try {
    return JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  } catch (error) {
    addError(relativePath, `could not parse JSON (${error.message})`);
    return null;
  }
}

function validateTools() {
  if (!fs.existsSync(TOOLS_DIR)) {
    addError('tools', 'tools directory does not exist');
    return;
  }

  const entries = fs.readdirSync(TOOLS_DIR, { withFileTypes: true }).filter((entry) => entry.isDirectory());

  entries.forEach((entry) => {
    const scope = `tools/${entry.name}/README.md`;
    const readmePath = path.join(TOOLS_DIR, entry.name, 'README.md');

    if (!fs.existsSync(readmePath)) {
      addError(scope, 'README.md is missing');
      return;
    }

    const content = fs.readFileSync(readmePath, 'utf8');
    const frontmatter = parseFrontmatter(content);

    if (!frontmatter) {
      addError(scope, 'frontmatter is missing or invalid');
      return;
    }

    TOOL_REQUIRED_FIELDS.forEach((field) => {
      if (!frontmatter[field]) addError(scope, `missing required field "${field}"`);
    });

    if (frontmatter.category && !VALID_CATEGORIES.has(frontmatter.category)) {
      addError(scope, `category must be one of: ${[...VALID_CATEGORIES].join(', ')}`);
    }

    if (frontmatter.audience && !VALID_AUDIENCES.has(frontmatter.audience)) {
      addError(scope, `audience must be one of: ${[...VALID_AUDIENCES].join(', ')}`);
    }

    if (frontmatter.status && !VALID_STATUSES.has(frontmatter.status)) {
      addError(scope, `status must be one of: ${[...VALID_STATUSES].join(', ')}`);
    }

    if (frontmatter.access_level && !VALID_ACCESS_LEVELS.has(frontmatter.access_level)) {
      addError(scope, `access_level must be one of: ${[...VALID_ACCESS_LEVELS].join(', ')}`);
    }

    if (frontmatter.url && !isHttpsUrl(frontmatter.url)) {
      addError(scope, 'url must be a valid https URL');
    }

    if (frontmatter.repo_url && !isHttpsUrl(frontmatter.repo_url)) {
      addError(scope, 'repo_url must be a valid https URL when present');
    }

    if (frontmatter.date_added && !isDate(frontmatter.date_added)) {
      addError(scope, 'date_added must be YYYY-MM-DD');
    }

    if (frontmatter.last_reviewed && !isDate(frontmatter.last_reviewed)) {
      addError(scope, 'last_reviewed must be YYYY-MM-DD');
    }

    if (frontmatter.review_cycle_days && !/^\d+$/.test(frontmatter.review_cycle_days)) {
      addError(scope, 'review_cycle_days must be a positive integer');
    }

    if (frontmatter.last_reviewed && frontmatter.review_cycle_days && isDate(frontmatter.last_reviewed)) {
      const cycle = Number(frontmatter.review_cycle_days);
      const age = daysSince(frontmatter.last_reviewed);
      if (age > cycle && frontmatter.status === 'active') {
        addError(scope, `active entry is stale (${age} days since review, cycle is ${cycle})`);
      } else if (age > cycle) {
        addWarning(scope, `review is stale (${age} days since review, cycle is ${cycle})`);
      }
    }
  });
}

function requireArrayItems(data, relativePath, fields) {
  if (!Array.isArray(data)) {
    addError(relativePath, 'expected a top-level array');
    return;
  }

  data.forEach((item, index) => {
    const scope = `${relativePath}[${index}]`;
    fields.forEach((field) => {
      if (item[field] === undefined || item[field] === null || item[field] === '') {
        addError(scope, `missing required field "${field}"`);
      }
    });
  });
}

function validateJsonData() {
  const apps = readJson('docs/apps/apps.json');
  if (apps) requireArrayItems(apps, 'docs/apps/apps.json', ['name', 'category', 'use_cases', 'audience', 'url']);

  const recipes = readJson('docs/demos/recipes.json');
  if (recipes) {
    requireArrayItems(recipes, 'docs/demos/recipes.json', [
      'id',
      'name',
      'description',
      'industry',
      'model',
      'verticals',
      'config',
      'demo_talking_points',
    ]);
  }

  const learnings = readJson('docs/learnings/learnings.json');
  if (learnings) {
    requireArrayItems(learnings, 'docs/learnings/learnings.json', [
      'id',
      'title',
      'category',
      'summary',
      'key_points',
      'tags',
      'doc_section',
    ]);
  }

  const decks = readJson('docs/slide-decks/decks.json');
  if (decks) requireArrayItems(decks, 'docs/slide-decks/decks.json', ['id', 'name', 'description', 'url', 'author', 'tags']);
}

function validateDocsDir() {
  if (!fs.existsSync(DOCS_DIR)) addError('docs', 'docs directory does not exist');
}

validateDocsDir();
validateTools();
validateJsonData();

warnings.forEach((warning) => console.warn(`Warning: ${warning}`));

if (errors.length > 0) {
  errors.forEach((error) => console.error(`Error: ${error}`));
  console.error(`\nCatalog validation failed with ${errors.length} error(s) and ${warnings.length} warning(s).`);
  process.exit(1);
}

console.log(`Catalog validation passed with ${warnings.length} warning(s).`);
