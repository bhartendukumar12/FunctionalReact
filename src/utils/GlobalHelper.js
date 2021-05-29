/**
 * Helper class for common utiliities across objects.
 */
const GlobalHelper = {

    /**
     * Provide Deep Clone of provided object or array
     */
    deepClone(obj, hash = new WeakMap()) {
        if (Object(obj) !== obj) return obj; // primitives
        if (hash.has(obj)) return hash.get(obj);
        let result;
        if (obj instanceof Set) {
            result = new Set(obj);
        } else if (obj instanceof Map) {
            result = new Map(Array.from(obj, ([key, val]) => [key, this.deepClone(val, hash)]));
        } else if (obj instanceof Date) {
            result = new Date(obj);
        } else if (obj instanceof RegExp) {
            result = new RegExp(obj.source, obj.flags);
        } else if (obj.constructor && !['Array', 'Object'].includes(obj.constructor.name)) {
            return obj;
        } else if (obj.constructor) {
            result = new obj.constructor();
        } else {
            result = Object.create(null);
        }
        hash.set(obj, result);
        return Object.assign(result, ...Object.keys(obj).map(
            (key) => ({ [key]: this.deepClone(obj[key], hash) })
        ));
    }

};

export default GlobalHelper;
