import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDCqCdFznaXXevzggHSzrR7oRmt4o1R5YA';

//Create a new component. This should prodouce
//some html
const App = () => {
    return <div>hi!</div>;
}

//Take this component's generated html and put it 
//on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));
