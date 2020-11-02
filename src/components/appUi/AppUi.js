import { AppDisplay } from '../appDisplay/AppDisplay'
import { AppButtons } from '../appButtons/AppButtons'

const AppUi = () => /* html */ `<div class="container">
    ${AppDisplay()}
    <hr />
    ${AppButtons()} 
</div>`

export default AppUi
