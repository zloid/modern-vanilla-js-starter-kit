/** @module components-Button */

/**
 * Presentational component
 * @function Button
 * @param {Object} props
 * @param {string} props.role
 * @param {string} props.className
 * @param {string} props.fireEvent
 * @param {string} props.event
 * @param {string} props.nodeText
 * @returns {string} template literal: bootstrap .col + custom html button
 * @example
 * ${Button({
            role: 'appButtonIncrement',
            className: 'calc-btn btn btn-outline-success btn-lg btn-block',
            fireEvent: 'ondblclick',
            event: 'window.mapAllDispatch.incrementDecrement.increment()',
            nodeText: '+',
    })}
 */
export const Button = ({
    role = '',
    className = 'fooBar',
    fireEvent = 'onclick',
    event = 'window.alert()',
    nodeText = 'testButton',
}) => /* html */ `<div class="col">
    <button
        role="${role}"
        class="${className}"
        ${fireEvent}="${event}"
    >
        ${nodeText}
    </button>
</div> `
