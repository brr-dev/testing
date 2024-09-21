// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { _makeFetchRes } from './_helpers';
import { spyOnFetch } from './spyOnFetch';

export type MockFetchOptions = {
    /**
     * Optionally pass a response value to resolve from the fetch response
     * as JSON.
     */
    response?: any;

    /**
     * If a response was passed, this lets you specify how many times
     * to use it. If true (default), only mocks the resolved value once.
     */
    once?: boolean;

    /**
     * Optionally pass in an already-existing spy for the fetch module.
     * Defaults to the global mock implementation of globalThis.fetch.
     */
    spy?: jest.SpyInstance;
};

export function mockFetchRes({
    response: _inputRes = { ok: true },
    once = true,
    spy,
}: MockFetchOptions = {}): jest.SpyInstance {
    if (!spy) {
        spy = spyOnFetch({ restoreAfterAll: false, clearBeforeEach: false });
    }

    const res = _makeFetchRes(_inputRes);
    if (once) spy.mockResolvedValueOnce(res);
    else spy.mockResolvedValue(res);

    return spy;
}
