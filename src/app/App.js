/** @module app-App */

// analog of React.js
import Reef from 'reefjs'
// presentational components
import { AppUi } from '../components/AppUi/AppUi'
import { GithubCorner } from '../components/GithubCorner/GithubCorner'

/**
 * Returns instance of Reef.js (whole SPA)
 * @function
 * @param {string=} placeToRender
 * @example
 * App('#cool-root').render()
 */
const App = (placeToRender = '#root') => new Reef(placeToRender, {
    template: () => /* html */ `<div>
    
        ${AppUi()}

        ${GithubCorner(
            'https://github.com/zloid/modern-vanilla-js-starter-kit'
        )}

    </div>`,
})

export default App
