/** @module components-Button */

/**
 * Presentational component
 * @function Button
 * @param {Object} props
 * @param {string=} props.role - HTML role attribute
 * @param {string=} props.className - HTML class attribute
 * @param {string=} props.eventType - HTML attribute named on-eventtype, specify an on-event handler for a particular event (such as click) 
 * @param {string=} props.event - Event target
 * @param {string=} props.nodeText - HTMLElement.innerText
 * @returns {string} template literal: bootstrap .col + custom html button
 * @example
 * ${Button({
            role: 'appButtonIncrement',
            className: 'app-btn btn btn-outline-success btn-lg btn-block',
            eventType: 'ondblclick',
            event: 'globalThis.mapAllDispatch.incrementDecrement.increment()',
            nodeText: '+',
})}
 */
export const Button = ({
    role = '',
    className = 'fooBar',
    eventType = 'onclick',
    event = 'globalThis.alert()',
    nodeText = 'testButton',
}) => /* html */ `<div class="col">
    <button
        role="${role}"
        class="${className}"
        ${eventType}="${event}"
    >
        ${nodeText}
    </button>
</div> `
