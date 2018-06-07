import React from 'react'
import Place from "../place/Place";
import Charactor from "../charactor/Charactor";
import Item from "../item/Item";
import "./Event.css"

const Event = ({data}) =>
    <article className="event">
        <h1>{data.title}</h1>
        <section className="where">
            <h1>장소</h1>
            <ul>
                {(data.where || []).map((place, index) =>
                    <li key={index}><Place data={place} /></li>)}
            </ul>
        </section>
        <section className="who">
            <h1>인물</h1>
            <ul>
                {(data.who || []).map((charactor, index) =>
                    <li key={index}><Charactor data={charactor} /></li>)}
            </ul>
        </section>
        <section className="what">
            <h1>사물</h1>
            <ul>
                {(data.what || []).map((item, index) =>
                    <li key={index}><Item data={item} /></li>)}
            </ul>
        </section>
        <section className="content">
            <h1>내용</h1>
            <div>{data.content}</div>
        </section>
    </article>;

export default Event