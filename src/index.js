// -mapAllDispatch- must be here, there all dispatch actions
import mapAllDispatch from './utils/mapAllDispatch'
// whole Application
import App from './app/App'
// for scripts which must be initialize after DOM complete load
import { DOMDidMount } from './utils/DOMDidMount'
// Redux store
import store from './app/store'
// styles for App
import 'bootstrap/dist/css/bootstrap.min.css'
import './app/app.css'

// creating DOM element: div#root
document.body.innerHTML = '<div id="root"></div>'

// render Reef's App to #root
// first render
App.render()
DOMDidMount()

// to fire render each time when dispatch redux actions
store.subscribe(() => {
    App.render()
})
