import React from 'react';
import ReactDOM from 'react-dom';

//Create a new component. This should prodouce
//some html
const App = function() {
    return <div>hi!</div>;
}

//Take this component's generated html and put it 
//on the page (in the dom)
ReactDOM.render(App);
