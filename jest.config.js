module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'packages/*'],
  testPathIgnorePatterns: ['dist'],
};
