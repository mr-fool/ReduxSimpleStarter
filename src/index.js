import React from 'react';


//Create a new component. This should prodouce
//some html
const App = function() {
    return <div>hi!</div>;
}

//Take this component's generated html and put it 
//on the page (in the dom)
React.render(App);
