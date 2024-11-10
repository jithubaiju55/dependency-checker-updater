// src/checker.js

const axios = require('axios');
const fs = require('fs');

// Helper function to get the latest version from npm
async function getLatestVersion(packageName) {
  try {
    const response = await axios.get(`https://api.npms.io/v2/package/${packageName}`);
    return response.data.collected.metadata.version;
  } catch (error) {
    throw new Error(`Failed to fetch version for ${packageName}: ${error.message}`);
  }
}

// Function to check dependencies for outdated packages
async function checkDependencies() {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));  // Read the package.json file
  const dependencies = Object.keys(packageJson.dependencies);  // Get all dependencies from package.json
  const outdatedPackages = [];

  for (const pkg of dependencies) {
    const currentVersion = packageJson.dependencies[pkg];  // Get the current version from package.json
    const latestVersion = await getLatestVersion(pkg);  // Fetch the latest version from npm

    if (currentVersion !== latestVersion) {
      outdatedPackages.push({
        pkg,
        current: currentVersion,
        latest: latestVersion
      });
    }
  }

  return outdatedPackages;
}

module.exports = { checkDependencies, getLatestVersion };
