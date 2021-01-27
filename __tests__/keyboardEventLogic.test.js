import { screen, fireEvent, getNodeText } from '@testing-library/dom'
import mapAllDispatch from './../src/utils/mapAllDispatch'
import App from './../src/app/App'
import { keyboardEventListener } from '../src/utils/keyboardEventListener'
import store from './../src/app/store'

// -mapAllDispatch- must be here, there all dispatch actions
globalThis.mapAllDispatch = mapAllDispatch

// creating DOM div #root
document.body.innerHTML = '<div id="root" data-testid="mainRootDiv"></div>'
// first render App to #root
App('#root').render()
keyboardEventListener()
// render each time when dispatch Redux actions
store.subscribe(() => App('#root').render())

describe("App's common tests", () => {
    beforeEach(() => {
        // initial, must be here
        document.getElementById('root').innerHTML += ''
        // clear screen by click main keyboard key Delete
        fireEvent.keyDown(document, { key: 'Delete', code: 'Delete' })
        // app screen is clear
        expect(getNodeText(screen.getByRole(/^appMainScreen$/i))).toBe('0')
    })
    it('increment with keyboard is working', () => {
        // Numpad key '+'
        fireEvent.keyDown(document, { key: '+', code: 'NumpadAdd' })
        fireEvent.keyDown(document, { key: '+', code: 'NumpadAdd' })
        fireEvent.keyDown(document, { key: '+', code: 'NumpadAdd' })
        // result
        expect(getNodeText(screen.getByRole(/^appMainScreen$/i))).toBe('3')
    })
    it('decrement with keyboard is working', () => {
        // main keyboard
        fireEvent.keyDown(document, { key: '-', code: 'Minus' })
        fireEvent.keyDown(document, { key: '-', code: 'Minus' })
        fireEvent.keyDown(document, { key: '-', code: 'Minus' })
        // result
        expect(getNodeText(screen.getByRole(/^appMainScreen$/i))).toBe('-3')
    })
})
