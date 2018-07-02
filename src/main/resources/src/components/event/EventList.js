import React from 'react'
import Event from "./Event"
import {connect} from "react-redux";
import "./Event.css"
import {changeEventPosition} from "../../actions";

const EventList = ({events, onDragEnd}) =>
    <ul className="event-list">
        {events.map((eventData, index) =>
            <Event key={index} data={eventData} onDragEnd={onDragEnd(index)}/>)}
    </ul>;

export {EventList}
export default connect(
    state => ({
        events: state.events
    }),
    dispatch => ({
        onDragEnd: index => (x, y) => dispatch(changeEventPosition(index, x, y))
    })
)(EventList)
