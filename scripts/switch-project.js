#!/usr/bin/env node
const fs = require('fs');
const readline = require('readline');

const projects = {
  lvgt: {
    name: 'Las Vegas Good Times',
    id: 'lvgt-pwa',
    color: '#ff4d4f',
    firebase: 'exprezzzo-lvgt'
  },
  eis: {
    name: 'EIS Admin',
    id: 'eis-intel',
    color: '#007bff',
    firebase: 'exprezzzo-eis'
  },
  exprezzzo: {
    name: 'Exprezzzo Global',
    id: 'exprezzzo-global',
    color: '#00c46a',
    firebase: 'exprezzzo-sandbox-admin'
  }
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

console.log('Select your target project:');
Object.keys(projects).forEach((k, i) => console.log(`${i + 1}) ${projects[k].name}`));

rl.question('Enter number (1-3): ', answer => {
  const idx = parseInt(answer) - 1;
  const keys = Object.keys(projects);
  if (idx >= 0 && idx < keys.length) {
    const proj = projects[keys[idx]];
    console.log(`Switching to: ${proj.name}`);

    // Update package.json
    let pkg = JSON.parse(fs.readFileSync('./core/package.json', 'utf8'));
    pkg.name = proj.id;
    fs.writeFileSync('./core/package.json', JSON.stringify(pkg, null, 2));

    // Update .firebaserc (if present)
    if (fs.existsSync('.firebaserc')) {
      let firebaserc = JSON.parse(fs.readFileSync('.firebaserc', 'utf8'));
      firebaserc.projects = { default: proj.firebase };
      fs.writeFileSync('.firebaserc', JSON.stringify(firebaserc, null, 2));
    }

    // Update config/projects/manifest (color, id)
    const manifestPath = `./config/projects/${keys[idx]}.json`;
    if (fs.existsSync(manifestPath)) {
      let manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
      manifest.name = proj.name;
      manifest.id = proj.id;
      manifest.color = proj.color;
      fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    }

    console.log('Project switch complete.');
  } else {
    console.log('Invalid selection.');
  }
  rl.close();
});
