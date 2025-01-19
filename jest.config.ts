import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom", // Corrected to use the package directly
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // If you're using path aliases in tsconfig.json
    "\\.(png|jpe?g|gif|svg)$": "<rootDir>/__mocks__/fileMock.js", // Mock image files
    "\\.css$": "identity-obj-proxy", // Corrected regular expression
  },
};

export default config;
