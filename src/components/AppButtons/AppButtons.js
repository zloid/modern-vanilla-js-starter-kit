import { Button } from '../Button/Button'

export const AppButtons = () => /* html */ `<div class="row">
        <!-- component like in React  -->
        ${Button({
            role: 'appButtonIncrement',
            className: 'app-btn btn btn-outline-success btn-lg btn-block',
            event: 'globalThis.mapAllDispatch.incrementDecrement.increment()',
            nodeText: '+',
        })}

        <!-- component like in React  -->
        ${Button({
            role: 'appButtonDecrement',
            className: 'app-btn btn btn-outline-warning btn-lg btn-block',
            event: 'globalThis.mapAllDispatch.incrementDecrement.decrement()',
            nodeText: '-',
        })}

        <!-- plain html -->
        <div class="col">
            <button
                role="appButtonClear"
                class="app-btn btn btn-outline-danger btn-lg btn-block"
                onclick="globalThis.mapAllDispatch.incrementDecrement.clearAll()"
            >
                Clear
            </button>
        </div><!-- .col -->
</div>`
