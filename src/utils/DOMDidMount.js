/** @module utils-DOMDidMount */

import { keyboardEventListener } from './keyboardEventListener'

/**
 * Return eventListener -DOMContentLoaded- for window obj. The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
 * @function DOMDidMount
 * @returns {void}
 * @example
 * // keyboardEventListener()
 * DOMDidMount()
 */
export const DOMDidMount = () =>
    globalThis.addEventListener('DOMContentLoaded', () => {
        keyboardEventListener()
    })
