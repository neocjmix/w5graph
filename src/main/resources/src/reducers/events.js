import events from '../data/events'
import {CHANGE_EVENT_POSITION} from "../constants/actionTypes";

export default (state = events, action) => {
    switch(action.type){
        case CHANGE_EVENT_POSITION :
            return state.map((event, index) =>
                (index === action.index) ? {
                    ...event, ...{
                        x: action.x,
                        y: action.y,
                    }
                } : event);
        default :return state;
    }
}