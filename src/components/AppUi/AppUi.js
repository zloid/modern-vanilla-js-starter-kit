import { AppDisplay } from '../AppDisplay/AppDisplay'
import { AppButtons } from '../AppButtons/AppButtons'
import { InfoBoard } from '../InfoBoard/InfoBoard'

export const AppUi = () => /* html */ `<div class="container disable-dbl-tap-zoom">
    ${AppDisplay()}
    <hr />
    ${AppButtons()} 
    ${InfoBoard()} 
</div>`
