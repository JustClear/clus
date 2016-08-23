//
// Core.js
//

import extend from './extend.js';
import { find, merge, trim, type } from './utils.js';
import search from './search.js';
import DOM from './dom/index.js';
import parseHTML from './dom/parseHTML.js';

export default function Clus(selector, context) {
    return new Clus.fn.init(selector, context);
}

Clus.fn = Clus.prototype = {
    contructor: Clus,
    length: 0,
};

Clus.extend = Clus.fn.extend = extend;

// ====================================
// extend Clus methods
// ====================================

Clus.extend({
    find,
    merge,
    trim,
    type,
    parseHTML,
});

// ====================================
// extend selector
// ====================================

Clus.fn.extend(search);

// ====================================
// extend DOM methods
// ====================================
Clus.fn.extend(DOM);

window.Clus = window.C = window.$ = Clus;
