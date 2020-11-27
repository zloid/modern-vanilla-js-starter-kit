/** @module utils-keyboardEventListener */

/**
 * Function which define EventListener for catching Keyboard and NumPad buttons:  + - delete backspace; and ignoring all f-buttons on keyboard
 * 
 * @function keyboardEventListener
 * @returns {string} an empty string
 * @example
 * // click on keyboard [+] ~> -increment-
 * // click on keyboard [-] ~> -decrement-
 * // click on keyboard [delete] ~> -clear all-
 * keyboardEventListener()
 */
export const keyboardEventListener = () => {
    document.addEventListener(
        'keydown',
        (event) => {
            if (event.defaultPrevented || /f[0-9]/gi.test(event.key)) {
                return // Do nothing if the event was already processed or pressing some -F- function buttons
            }

            switch (true) {
                case /\+/.test(event.key):
                    globalThis.mapAllDispatch.incrementDecrement.increment()
                    break
                case /-/.test(event.key):
                    globalThis.mapAllDispatch.incrementDecrement.decrement()
                    break
                case /delete|backspace/i.test(event.key):
                    globalThis.mapAllDispatch.incrementDecrement.clearAll()
                    break
                default:
                    return // Quit when this doesn't handle the key event.
            }

            // Cancel the default action to avoid it being handled twice
            event.preventDefault()
        },
        true
    )

    // for UI, to avoid undefined
    return ''
}
