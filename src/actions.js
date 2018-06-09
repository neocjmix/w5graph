import {CHANGE_EVENT_POSITION} from "./constants/actionTypes";

const changeEventPosition = (index, x, y) => ({
    type : CHANGE_EVENT_POSITION,
    index : index,
    x : x,
    y : y
});

export {changeEventPosition};