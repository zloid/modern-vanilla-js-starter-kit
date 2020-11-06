import store from '../../app/store'

export const InfoBoard = () =>
    store.getState().incrementDecrement.displayData === 0
        ? /* html */ ``
        : /* html */ `
    <hr />
    <div class="row">    
        <div class="col">
            <span 
                role="infoBoard"
                class="badge badge-info"                
            >
                Try Keyboard:
                <br />
                +, -, Delete, Backspace
            </span>
        </div><!-- .col --> 
    </div>`
