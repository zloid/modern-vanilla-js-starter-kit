import { Button } from '../button/Button'

export const AppButtons = () => /* html */ `<div class="row">
        <!-- component like in React  -->
        ${Button({
            role: 'appButtonIncrement',
            className: 'calc-btn btn btn-outline-success btn-lg btn-block',
            event: 'window.mapAllDispatch.incrementDecrement.increment()',
            nodeText: '+',
        })}

        <!-- component like in React  -->
        ${Button({
            role: 'appButtonDecrement',
            className: 'calc-btn btn btn-outline-warning btn-lg btn-block',
            event: 'window.mapAllDispatch.incrementDecrement.decrement()',
            nodeText: '-',
        })}

        <!-- plain html -->
        <div class="col">
            <button
                role="appButtonClear"
                class="calc-btn btn btn-outline-danger btn-lg btn-block"
                onclick="window.mapAllDispatch.incrementDecrement.clearAll()"
            >
                Clear
            </button>
        </div><!-- .col -->
</div>`
