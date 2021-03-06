import { pathsToModuleNameMapper } from "ts-jest/utils";

export default {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/modules/**/services/*.ts"],
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text-summary"],
  testEnvironment: "node",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/src/",
  }),
};
