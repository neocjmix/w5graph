import React from 'react'
import Event from "./Event"
import {App} from "../app/App";
import {connect} from "react-redux";

const EventList = ({events}) =>
    <ul>
        {events.map((eventData, index) =>
            <Event key={index} data={eventData}/>)}
    </ul>;

export {EventList}
export default connect(
    state => ({
        events: state.events
    }))(EventList);
