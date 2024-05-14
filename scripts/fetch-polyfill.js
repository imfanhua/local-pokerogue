// Fix Tauri's fetch
{
    const _fetch = fetch;
    fetch = (...args) => _fetch(...args).catch(err => Promise.resolve({ ok: false, err }));
}
