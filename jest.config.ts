/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!<rootDir>/src/main/**",
    "!**/test/**",
    ],
  coverageProvider: "v8",
  testEnvironment: "node",
  transform: {
    ".+\\.ts": "ts-jest",
},
};
