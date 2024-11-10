const { updateDependencies } = require('../src/updater');

describe('Dependency Updater', () => {
  it('should run update command', () => {
    const outdatedPackages = [{ pkg: 'axios', latest: '0.21.1' }];
    expect(() => updateDependencies(outdatedPackages)).not.toThrow();
  });
});
