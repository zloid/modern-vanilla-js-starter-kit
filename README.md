<!-- Information about the project to be edited by hand -->

# modern-vanilla-JS-starter-kit

## Target

The creation of a small web SPA with a modern JS ecosystem around webpack. You can comfortably create a framework agnostic JS application, but (c) "Thinking in React" with reactivity based on the Redux-toolkit and Reef.js lib.

## Features for Developers

-   Predictable Flux architecture
-   Separation of App logic and UI
-   Components architecture, rely on predictable RTK style
-   All RTK features: Redux Dev Tools, slices, immer, etc.
-   Jest and @testing-library/dom for tests
-   @babel for: es6 to es5 and correct work with jest & ESM modules
-   Husky: for hooks
-   Bootstrap (without jquery and popper.js) for simple CSS
-   CSS is Auto-Purge, while build creating
-   Automatic generation of html documentation from JSDoc + docdash as a nice looking template for JSDoc
-   Automatic README.md generation from jsdoc
-   Flexibility. Feel free to change one library from this starter kit to another. For example you can change Redux-toolkit to vanilla Redux for reduce size of final bundle

## You can

-   git clone [this_repo_url] && cd [repo_name] && npm i (install this repo on your machine)
-   npm run test (for tests)
-   npm run start (for run dev server)
-   npm run build (for creating public build, index.html autogenerate)
-   npm run docs (for create html docs for app by jsdoc and md-docs by jsdoc-to-markdown)
-   npm run serve (for run app local server and www)
-   use VSC + Extensions: "Comment tagged templates", "lit-html", for best expierence with js template literals

<!-- You do not need to touch the settings below. This is for automatic README.md generation -->
<!-- check out https://github.com/jsdoc2md for learn more -->

## API Reference

## Modules

| Module                        | Description |
| ----------------------------- | ----------- |
| [components-Button]           |
| [components-GithubCorner]     |
| [utils-DOMDidMount]           |
| [utils-keyboardEventListener] |
| [utils-mapAllDispatch]        |

## components-Button

### components-Button~Button(props)

Presentational component

**Kind**: inner method of [`components-Button`]  
**Returns**: `string` - template literal: bootstrap .col + custom html button

| Param           | Type     | Description                                                                                           |
| --------------- | -------- | ----------------------------------------------------------------------------------------------------- |
| props           | `Object` |                                                                                                       |
| props.role      | `string` | HTML role attribute                                                                                   |
| props.className | `string` | HTML class attribute                                                                                  |
| props.eventType | `string` | HTML attribute named on-eventtype, specify an on-event handler for a particular event (such as click) |
| props.event     | `string` | Event target                                                                                          |
| props.nodeText  | `string` | HTMLElement.innerText                                                                                 |

**Example**

```js
${Button({
            role: 'appButtonIncrement',
            className: 'calc-btn btn btn-outline-success btn-lg btn-block',
            eventType: 'ondblclick',
            event: 'window.mapAllDispatch.incrementDecrement.increment()',
            nodeText: '+',
})}
```

## components-GithubCorner

### components-GithubCorner~GithubCorner(linkToRepo)

Presentational component

**Kind**: inner method of [`components-GithubCorner`]  
**Returns**: `string` - template literal: octoCat svg + link to repo

| Param      | Type     | Description               |
| ---------- | -------- | ------------------------- |
| linkToRepo | `string` | link to github repository |

**Example**

```js
${GithubCorner('https://github.com/')}
```

## utils-DOMDidMount

### utils-DOMDidMount~DOMDidMount()

Return eventListener -DOMContentLoaded- for window obj. The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

**Kind**: inner method of [`utils-DOMDidMount`]  
**Returns**: `EventListener` - EventListener which call all special scripts after DOMDidMount  
**Example**

```js
// keyboardEventListener()
DOMDidMount()
```

## utils-keyboardEventListener

### utils-keyboardEventListener~keyboardEventListener()

Function which returns keydown events handler, catching keyboard [+ - delete backspace]

**Kind**: inner method of [`utils-keyboardEventListener`][1]  
**Returns**: `document.addEventListener('keydown', listener)` - EventListener for catching Keyboard and NumPad buttons: + - delete backspace; and ignoring all f-buttons on keyboard  
**Example**

```js
// click on keyboard [+] ~> -increment-'
// click on keyboard [-] ~> -decrement-'
// click on keyboard [delete] ~> -clear all-'
keyboardEventListener()
```

## utils-mapAllDispatch

### utils-mapAllDispatch~Connect

Connect
library for compose RTK actions

**Kind**: inner class of [`utils-mapAllDispatch`]

<!-- LINKS -->

[components-button]: #components-button
[components-githubcorner]: #components-githubcorner
[utils-domdidmount]: #utils-domdidmount
[utils-keyboardeventlistener]: #utils-keyboardeventlistener
[utils-mapalldispatch]: #utils-mapalldispatch
[`components-button`]: #components-button
[`components-githubcorner`]: #components-githubcorner
[`utils-domdidmount`]: #utils-domdidmount
[1]: #utils-keyboardeventlistener
[`utils-mapalldispatch`]: #utils-mapalldispatch
