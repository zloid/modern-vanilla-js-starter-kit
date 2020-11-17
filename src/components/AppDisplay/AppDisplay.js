import store from '../../app/store'

export const AppDisplay = () => /* html */ `<div class="row">
    <div
        class="col appScreen"
        role="appMainScreen"
    >${store.getState().incrementDecrement.displayData}</div>
</div>`
