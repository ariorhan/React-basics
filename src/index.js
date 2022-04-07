import React from 'react';
import ReactDOM from 'react-dom'

const names = ['Arin', 'Elis', 'Gamze']

function App() {
    return (
    <div>
        {names.map(name =>(<h1>{name}</h1>))}
    </div>
    );
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);