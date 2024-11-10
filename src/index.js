const { checkDependencies } = require('./checker');
const { updateDependencies } = require('./updater');

(async () => {
  try {
    const outdatedPackages = await checkDependencies();

    if (outdatedPackages.length === 0) {
      console.log('All dependencies are up to date.');
    } else {
      console.log('Outdated packages found:', outdatedPackages);

      // Optionally prompt the user for updating dependencies
      const shouldUpdate = true; // For simplicity; replace with user prompt if desired
      if (shouldUpdate) {
        updateDependencies(outdatedPackages);
      }
    }
  } catch (error) {
    console.error('Error checking dependencies:', error.message);
  }
})();
