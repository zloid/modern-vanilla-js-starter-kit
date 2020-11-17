import Reef from 'reefjs'
// presentational components
import { AppUi } from '../components/AppUi/AppUi'
import { GithubCorner } from '../components/GithubCorner/GithubCorner'

const App = new Reef('#root', {
    template: () => /* html */ `<div>
    
        ${AppUi()}

        ${GithubCorner(
            'https://github.com/zloid/modern-vanilla-js-starter-kit'
        )}

    </div>`,
})

export default App
