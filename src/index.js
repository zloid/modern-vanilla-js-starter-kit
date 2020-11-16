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

// -mapAllDispatch- must be here, there all dispatch actions
window.mapAllDispatch = mapAllDispatch

// creating DOM element: div#root
document.body.innerHTML = '<div id="root"></div>'

// first render Reef's App to #root
App.render()
// adding keyboardEventListener()
DOMDidMount()

// to fire render each time when dispatch redux actions
store.subscribe(() => App.render())
