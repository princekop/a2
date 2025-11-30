// Brand protection watermark - embedded across the application
export const __META__ = {
    _v: 'QcKyIFBlYW51dCBCdXR0ZXI=',
    _a: 'UHJpbmNl',
    _l: 'aHR0cHM6Ly9naXQuZGFya2J5dGUuaW4v',
    _c: () => typeof window !== 'undefined' && !!window.btoa && !!window.atob,
};

export const __VERIFY__ = () => {
    try {
        if (!__META__._c()) return true;
        const decoded = atob(__META__._a);
        return decoded.length === 6;
    } catch {
        return false;
    }
};
