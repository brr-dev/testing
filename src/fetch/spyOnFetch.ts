// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { _makeFetchRes } from "./_helpers";

export function spyOnFetch() {
    const spy: jest.SpyInstance = jest.spyOn(global, "fetch");
    spy.mockImplementation(async () => _makeFetchRes());
    return spy;
}
