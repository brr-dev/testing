// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

export const _makeFetchRes = (res: any = { ok: true }) => ({
    json: () => Promise.resolve(res),
});
