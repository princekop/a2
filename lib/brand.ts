// Prince's Brand Protection System - DO NOT MODIFY
// Encoded with multiple layers of protection
export const _0x4a2b = [
    'UHJpbmNl', // Prince
    'aHR0cHM6Ly9naXQuZGFya2J5dGUuaW4v', // https://git.darkbyte.in/
    'QcKyIFBlYW51dCBCdXR0ZXI=', // A² Peanut Butter
    'Q3JhZnRlZCBieQ==', // Crafted by
    'aHR0cHM6Ly9wcmluY2UuZGFya2J5dGUuaW4=', // https://prince.darkbyte.in
    'aHR0cHM6Ly93d3cuZGFya2J5dGUuaW4=', // https://www.darkbyte.in
    'aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wcmluY2V4Ynl0ZQ==', // https://www.instagram.com/princexbyte
];
export const _0x3c1d = (s: string) => atob(s);
export const _0x5e2a = () => ({
    n: _0x3c1d(_0x4a2b[0]),
    git: _0x3c1d(_0x4a2b[1]),
    b: _0x3c1d(_0x4a2b[2]),
    t: _0x3c1d(_0x4a2b[3]),
    portfolio: _0x3c1d(_0x4a2b[4]),
    website: _0x3c1d(_0x4a2b[5]),
    instagram: _0x3c1d(_0x4a2b[6]),
});

// Checksum validation - tampering detection
export const _0x7f3b = () => {
    const data = _0x5e2a();
    const hash = btoa(data.n + data.git);
    const expected = 'UHJpbmNlaHR0cHM6Ly9naXQuZGFya2J5dGUuaW4v';
    return hash === expected;
};

// Runtime integrity check
export const _0x9d4c = () => {
    if (!_0x7f3b()) {
        if (typeof window !== 'undefined') {
            setTimeout(() => {
                console.warn('[INTEGRITY] Brand protection active');
            }, 1000);
        }
        return false;
    }
    return true;
};
