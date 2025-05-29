module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    testEnvironmentOptions: {
        customExportConditions: ['node', 'require', 'default'],
    },
    testMatch: ['<rootDir>/__tests__/**/*.test.tsx'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        '^.+\\.(ts|tsx|js|jsx|mjs)$': ['@swc/jest', {
            jsc: {
                transform: {
                    react: { runtime: 'automatic' },
                },
            },
        }],
    },
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    setupFilesAfterEnv: ['<rootDir>/setupTestsComponents.tsx'],
    clearMocks: true,
    collectCoverage: true,
    coverageProvider: "v8",
    coverageThreshold: {
        global: {
            branches: 40,
            functions: 40,
            lines: 40,
            statements: 40,
        },
    }
};