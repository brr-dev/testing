// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

export default function mockFetch({
    response: _inputRes,
    once = true,
    // spyOn returns the same mock implementation every time
    spy = jest.spyOn(global, "fetch"),
}: {
    response?: any;
    once?: boolean;
    spy?: jest.Mock | jest.SpyInstance;
}) {
    if (_inputRes !== undefined) {
        const res = { json: Promise.resolve(_inputRes) };
        if (once) spy.mockResolvedValueOnce(res);
        else spy.mockResolvedValue(res);
    }

    return spy;
}
