import { AppDisplay } from '../appDisplay/AppDisplay'
import { AppButtons } from '../appButtons/AppButtons'
import { InfoBoard } from '../infoBoard/InfoBoard'

export const AppUi = () => /* html */ `<div class="container disable-dbl-tap-zoom">
    ${AppDisplay()}
    <hr />
    ${AppButtons()} 
    ${InfoBoard()} 
</div>`
