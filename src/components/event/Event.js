import React from 'react'
import Place from "../place/Place";
import Charactor from "../charactor/Charactor";
import Item from "../item/Item";

const Event = ({data}) =>
    <article className="event" style={{top:data.y, left:data.x}}>
        <h1>{data.title}</h1>
        <section className="where">
            <h1 className="title">장소</h1>
            <ul className="value">
                {(data.where || []).map((place, index) =>
                    <li key={index}><Place data={place} /></li>)}
            </ul>
        </section>
        <section className="who">
            <h1 className="title">인물</h1>
            <ul className="value">
                {(data.who || []).map((charactor, index) =>
                    <li key={index}><Charactor data={charactor} /></li>)}
            </ul>
        </section>
        <section className="what">
            <h1 className="title">사물</h1>
            <ul className="value">
                {(data.what || []).map((item, index) =>
                    <li key={index}><Item data={item} /></li>)}
            </ul>
        </section>
        <section className="content">
            <h1 className="title">내용</h1>
            <div className="value">{data.content}</div>
        </section>
    </article>;

export default Event