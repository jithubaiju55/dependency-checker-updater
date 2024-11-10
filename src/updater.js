const { execSync } = require('child_process');

function updateDependencies(outdatedPackages) {
  outdatedPackages.forEach(({ pkg, latest }) => {
    console.log(`Updating ${pkg} to version ${latest}...`);
    execSync(`npm install ${pkg}@${latest}`, { stdio: 'inherit' });
  });
}

module.exports = { updateDependencies };
