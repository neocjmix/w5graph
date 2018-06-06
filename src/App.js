import React from 'react';
import './App.css';

const Charactor = props =>
    <div className="charactor">
        {props.data}
    </div>;

const Item = props =>
    <div className="item">
        {props.data}
    </div>;

const Place = props =>
    <div className="place">
        {props.data}
    </div>;

const W5Event = props =>
    <article className="event">
        <h1>{props.data.title}</h1>
        <section className="where">
            <h1>장소</h1>
            <ul>
                {(props.data.where || []).map((place, index) =>
                    <li key={index}><Place data={place} /></li>)}
            </ul>
        </section>
        <section className="who">
            <h1>인물</h1>
            <ul>
                {(props.data.who || []).map((charactor, index) =>
                    <li key={index}><Charactor data={charactor} /></li>)}
            </ul>
        </section>
        <section className="what">
            <h1>사물</h1>
            <ul>
                {(props.data.what || []).map((item, index) =>
                    <li key={index}><Item data={item} /></li>)}
            </ul>
        </section>
        <section className="content">
            <h1>내용</h1>
            <div>{props.data.content}</div>
        </section>
    </article>;

const App = props =>
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">W5Graph</h1>
        </header>
        <main>
            {props.store.map((eventData, index) =>
                <W5Event key={index} data={eventData}/>)}
        </main>
    </div>;

export default App;
