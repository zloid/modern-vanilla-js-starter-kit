import { screen, fireEvent, getNodeText } from '@testing-library/dom'
// -mapAllDispatch- must be here, there all dispatch actions
import mapAllDispatch from './../src/utils/mapAllDispatch'
import App from './../src/app/App'
import store from './../src/app/store'

// creating DOM div #root
document.body.innerHTML = '<div id="root" data-testid="mainRootDiv"></div>'
// first render App to #root
App.render()
// render each time when dispatch Redux actions
store.subscribe(() => {
    App.render()
})

describe("App's common tests", () => {
    beforeEach(() => {
        // initial, must be here
        document.getElementById('root').innerHTML += ''
        // clear app's screen value
        fireEvent.click(screen.getByRole(/^appButtonClear$/i))
        // app screen is clear
        expect(getNodeText(screen.getByRole(/^appMainScreen$/i))).toBe('0')
    })
    it('initial div "root" is exist', () => {
        screen.getByTestId(/^mainRootDiv$/)
    })
    it('-GitHub Corners- is exist', () => {
        screen.getByRole(/^githubCorner$/i)
    })
    it('increment is working', () => {
        // click +
        fireEvent.click(screen.getByRole(/^appButtonIncrement$/i))
        // result
        expect(getNodeText(screen.getByRole(/^appMainScreen$/i))).toBe('1')
    })
    it('increment is working', () => {
        // click +
        fireEvent.click(screen.getByRole(/^appButtonIncrement$/i))
        fireEvent.click(screen.getByRole(/^appButtonIncrement$/i))
        fireEvent.click(screen.getByRole(/^appButtonIncrement$/i))
        // result
        expect(getNodeText(screen.getByRole(/^appMainScreen$/i))).toBe('3')
    })
    it('decrement is working', () => {
        // click -
        fireEvent.click(screen.getByRole(/^appButtonDecrement$/i))
        // result
        expect(getNodeText(screen.getByRole(/^appMainScreen$/i))).toBe('-1')
    })
})
