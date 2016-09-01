//
// instance methods
//

export function is(selector) {
    return this.length > 0 && Clus.matches(this[0], selector);
}

export default {
    is,
};