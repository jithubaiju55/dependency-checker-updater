// test/checker.test.js

const axios = require('axios');
const { checkDependencies } = require('../src/checker');

jest.mock('axios');

describe('Dependency Checker', () => {
  beforeAll(() => {
    // Mock the axios response for npm packages
    axios.get.mockImplementation((url) => {
      if (url.includes('axios')) {
        return Promise.resolve({ data: { collected: { metadata: { version: '0.21.1' } } } });
      }
      return Promise.reject(new Error('Package not found'));
    });
  });

  it('should identify outdated dependencies', async () => {
    // Mock package.json content
    const outdated = await checkDependencies(); // Now accessible
    expect(outdated).toEqual(expect.arrayContaining([
      expect.objectContaining({ pkg: 'axios', current: expect.any(String), latest: '0.21.1' })
    ]));
  });
});
