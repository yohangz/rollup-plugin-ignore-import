const { readJsonSync, writeJsonSync, copySync } = require('fs-extra');
const packageJson = readJsonSync('./package.json');

if (Object.keys(packageJson.dependencies).length) {
  packageJson.peerDependencies = packageJson.dependencies;
}

delete packageJson.dependencies;
delete packageJson.devDependencies;
delete packageJson.scripts;
writeJsonSync('./dist/package.json', packageJson, { spaces: 2, EOL: '\n' });

copySync('README.md', 'dist/README.md');
copySync('LICENSE', 'dist/LICENSE');
