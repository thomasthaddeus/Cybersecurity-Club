const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const configPath = resolve(__dirname, '..', 'template.config.json');
const args = process.argv.slice(2);

const aliases = {
  name: ['site', 'name'],
  'short-name': ['site', 'shortName'],
  tagline: ['site', 'tagline'],
  description: ['site', 'description'],
  url: ['site', 'url'],
  discord: ['socials', 'discord'],
  github: ['socials', 'github'],
  linkedin: ['socials', 'linkedin'],
  'meeting-day': ['meeting', 'day'],
  'meeting-time': ['meeting', 'time'],
  'meeting-location': ['meeting', 'location'],
  'meeting-cadence': ['meeting', 'cadence'],
  'signup-url': ['membership', 'signupUrl'],
  email: ['contact', 'email'],
  phone: ['contact', 'phone'],
  address: ['contact', 'address'],
  year: ['site', 'year'],
};

const usage = `Usage:
  npm run template:configure -- --name "My Cyber Club" --email "club@example.edu" --url "https://example.edu/cyber"

Supported fields:
  --name, --short-name, --tagline, --description, --url, --email, --phone, --address, --year
  --discord, --github, --linkedin, --meeting-day, --meeting-time, --meeting-location
  --meeting-cadence, --signup-url
`;

if (args.includes('--help') || args.includes('-h')) {
  console.log(usage);
  process.exit(0);
}

const config = JSON.parse(readFileSync(configPath, 'utf8'));

for (let index = 0; index < args.length; index += 1) {
  const current = args[index];
  if (!current.startsWith('--')) continue;

  const key = current.slice(2);
  const path = aliases[key];
  if (!path) {
    console.error(`Unknown option: ${current}`);
    console.error(usage);
    process.exit(1);
  }

  const value = args[index + 1];
  if (!value || value.startsWith('--')) {
    console.error(`Missing value for ${current}`);
    process.exit(1);
  }

  config[path[0]][path[1]] = value;
  if (key === 'email' && config.socials) {
    config.socials.email = value;
  }
  index += 1;
}

writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`);
console.log('template.config.json updated.');

require('./sync-template-metadata');
