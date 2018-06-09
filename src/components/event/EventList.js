import React from 'react'
import Event from "./Event"
import {connect} from "react-redux";
import "./Event.css"

const EventList = ({events}) =>
    <ul className="event-list">
        {events.map((eventData, index) =>
            <Event key={index} data={eventData}/>)}
    </ul>;

export {EventList}
export default connect(
    state => ({
        events: state.events
    }))(EventList);
