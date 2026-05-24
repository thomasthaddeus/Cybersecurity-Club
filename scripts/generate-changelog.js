const { execFileSync } = require('child_process');
const { existsSync, readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const changelogPath = resolve(__dirname, '..', 'CHANGELOG.md');
const checkOnly = process.argv.includes('--check');

const runGit = (args) => {
  try {
    return execFileSync('git', args, {
      cwd: resolve(__dirname, '..'),
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return '';
  }
};

const commitLines = runGit(['log', '--pretty=format:%h%x09%s', '--no-merges']);
const existing = existsSync(changelogPath) ? readFileSync(changelogPath, 'utf8') : '';

if (!commitLines && existing) {
  if (checkOnly) process.exit(0);
  console.warn('Git history is unavailable; keeping the existing CHANGELOG.md content.');
  process.exit(0);
}

const categorize = (subject) => {
  const lower = subject.toLowerCase();
  if (lower.startsWith('bump ') || lower.includes('dependabot')) return 'Dependency Updates';
  if (lower.includes('fix') || lower.includes('broken')) return 'Fixes';
  if (lower.includes('doc') || lower.includes('readme') || lower.includes('changelog')) return 'Documentation';
  return 'Changes';
};

const groups = new Map([
  ['Changes', []],
  ['Fixes', []],
  ['Dependency Updates', []],
  ['Documentation', []],
]);

for (const line of commitLines.split('\n').filter(Boolean)) {
  const [hash, subject] = line.split('\t');
  if (!hash || !subject) continue;
  const bucket = categorize(subject);
  groups.get(bucket).push(`- ${subject} (${hash})`);
}

const sections = [...groups.entries()]
  .filter(([, entries]) => entries.length > 0)
  .map(([heading, entries]) => `### ${heading}\n\n${entries.join('\n')}`)
  .join('\n\n');

const content = `# Changelog

All notable project changes are tracked here. This file is generated from git history by \`npm run changelog:generate\`.

## Unreleased

- Use this section for human-written release notes before tagging a release.

## Current History

${sections || '- No git history was available when this changelog was generated.'}
`;

if (checkOnly) {
  if (existing !== content) {
    console.error('CHANGELOG.md is out of date. Run npm run changelog:generate.');
    process.exit(1);
  }
  process.exit(0);
}

writeFileSync(changelogPath, content);
console.log('CHANGELOG.md generated.');
