#!/usr/bin/env node

// Scans tools subdirectories for README.md files, parses YAML frontmatter,
// and writes docs/catalog.json for the catalog site.

const fs = require('fs');
const path = require('path');

const TOOLS_DIR = path.join(__dirname, '..', 'tools');
const OUTPUT = path.join(__dirname, '..', 'docs', 'catalog.json');

function parseFrontmatter(content) {
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return null;

    const frontmatter = {};
    match[1].split('\n').forEach(line => {
        const idx = line.indexOf(':');
        if (idx === -1) return;
        const key = line.slice(0, idx).trim();
        let value = line.slice(idx + 1).trim();
        // Strip surrounding quotes
        if ((value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
        }
        frontmatter[key] = value;
    });

    return frontmatter;
}

function buildCatalog() {
    const catalog = [];

    if (!fs.existsSync(TOOLS_DIR)) {
        console.log('No tools/ directory found. Writing empty catalog.');
        fs.writeFileSync(OUTPUT, JSON.stringify([], null, 2));
        return;
    }

    const entries = fs.readdirSync(TOOLS_DIR, { withFileTypes: true });

    for (const entry of entries) {
        if (!entry.isDirectory()) continue;

        const readmePath = path.join(TOOLS_DIR, entry.name, 'README.md');
        if (!fs.existsSync(readmePath)) {
            console.warn(`Skipping ${entry.name}/ — no README.md found`);
            continue;
        }

        const content = fs.readFileSync(readmePath, 'utf-8');
        const frontmatter = parseFrontmatter(content);

        if (!frontmatter) {
            console.warn(`Skipping ${entry.name}/ — no valid frontmatter`);
            continue;
        }

        if (!frontmatter.name || !frontmatter.url || !frontmatter.category) {
            console.warn(`Skipping ${entry.name}/ — missing required fields (name, url, category)`);
            continue;
        }

        catalog.push({
            slug: entry.name,
            name: frontmatter.name,
            description: frontmatter.description || '',
            url: frontmatter.url,
            category: frontmatter.category,
            built_with: frontmatter.built_with || '',
            audience: frontmatter.audience || '',
            author: frontmatter.author || 'Unknown',
            author_slack: frontmatter.author_slack || '',
            date_added: frontmatter.date_added || '',
            screenshot: frontmatter.screenshot || '',
            slack_channel: frontmatter.slack_channel || '',
            repo_url: frontmatter.repo_url || '',
            b2b_specific: frontmatter.b2b_specific === 'true' || frontmatter.b2b_specific === true,
        });
    }

    // Sort by date added (newest first), then by name
    catalog.sort((a, b) => {
        if (a.date_added && b.date_added) {
            const dateDiff = b.date_added.localeCompare(a.date_added);
            if (dateDiff !== 0) return dateDiff;
        }
        return a.name.localeCompare(b.name);
    });

    fs.writeFileSync(OUTPUT, JSON.stringify(catalog, null, 2));
    console.log(`Built catalog with ${catalog.length} tools → ${OUTPUT}`);
}

buildCatalog();
