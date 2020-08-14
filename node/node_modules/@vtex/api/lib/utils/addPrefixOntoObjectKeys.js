"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPrefixOntoObjectKeys = (prefix, obj) => {
    const ret = {};
    const entries = Object.entries(obj);
    for (const [key, val] of entries) {
        ret[`${prefix}.${key}`] = val;
    }
    return ret;
};
