import * as actions from './actiontypes.js'


    export const increaseCounter = () => {

        return {

            type: actions.INCREMENT,

        };

    };

    export const decreaseCounter = () => {

        return {

           type: actions.DECREMENT,

        };

    };