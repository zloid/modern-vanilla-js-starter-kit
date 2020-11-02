export const AppButtons = () => /* html */ `<div>
    <div class="row">
        <div class="col">
            <button
                role="appButtonIncrement"
                class="calc-btn btn btn-outline-success btn-lg btn-block"
                onclick="window.mapAllDispatch.incrementDecrement.increment()"
            >
                +
            </button>
        </div><!-- .col -->
        <div class="col">
            <button
                role="appButtonDecrement"
                class="calc-btn btn btn-outline-warning btn-lg btn-block"
                onclick="window.mapAllDispatch.incrementDecrement.decrement()"
            >
                -
            </button>
        </div><!-- .col -->
        <div class="col">
            <button
                role="appButtonClear"
                class="calc-btn btn btn-outline-danger btn-lg btn-block"
                onclick="window.mapAllDispatch.incrementDecrement.clearAll()"
            >
                Clear
            </button>
        </div><!-- .col -->
    </div><!-- .row -->

    <div class="row">
        <div class="col">
            <span class="badge badge-info">
                Try Keyboard: +, -, Delete, Backspace
            </span>
        </div><!-- .col -->        
    </div><!-- .row -->

</div>`
