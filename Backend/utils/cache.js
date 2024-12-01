const cache = {};
const CACHE_EXPIRY = 60 * 1000; // Cache expiry in milliseconds (1 minute)

// Get data from the cache
const get = (key) => {
    const entry = cache[key];
    if (!entry) return null;

    const now = Date.now();
    if (now - entry.timestamp > CACHE_EXPIRY) {
        delete cache[key];
        return null;
    }

    return entry.data;
};

// Set data into the cache
const set = (key, data) => {
    cache[key] = { data, timestamp: Date.now() };
};

// Clear expired cache entries
const clean = () => {
    const now = Date.now();
    for (const key in cache) {
        if (now - cache[key].timestamp > CACHE_EXPIRY) {
            delete cache[key];
        }
    }
};

module.exports = { get, set, clean };
