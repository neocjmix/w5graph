import React from 'react';
import './App.css';
import EventList from "../event/EventList";

const App = () =>
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">W5Graph</h1>
        </header>
        <main>
            <EventList />
        </main>
    </div>;

export default App

