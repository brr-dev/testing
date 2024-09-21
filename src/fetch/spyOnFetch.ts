// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { _makeFetchRes } from './_helpers';

export type SpyOnFetchOptions = {
    mockImplementation?: boolean; // Default true
    restoreAfterAll?: boolean; // Default true
    clearBeforeEach?: boolean; // Default true
};

export function spyOnFetch({
    mockImplementation = true,
    clearBeforeEach = true,
    restoreAfterAll = true,
}: SpyOnFetchOptions = {}) {
    const spy: jest.SpyInstance = jest.spyOn(globalThis, 'fetch');

    if (mockImplementation) {
        spy.mockImplementation(async () => _makeFetchRes());
    }

    if (clearBeforeEach) {
        beforeEach(() => {
            spy.mockClear();
        });
    }

    if (restoreAfterAll) {
        afterAll(() => {
            spy.mockRestore();
        });
    }

    return spy;
}
