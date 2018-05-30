// https://reactjs.org/warnings/dont-call-proptypes.html
import warning from 'warning';

let warned = {};

export function deprecated(propType, explanation) {
    return function validate(props, propName, componentName, ...rest) { // Note ...rest here
        if (props[propName]) {
            const message = `"${propName}" property of "${componentName}" has been deprecated and will be removed in the next major version. 
If you disagree with this change, please contact us at #styleguide on slack or create GitHub issue. 
Explanation: ${explanation}`;
            if (!warned[message]) {
                warning(false, message);
                warned[message] = true;
            }
        }
        return propType(props, propName, componentName, ...rest); // and here
    };
}

function _resetWarned() {
    warned = {};
}

deprecated._resetWarned = _resetWarned;