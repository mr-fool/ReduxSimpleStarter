import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';


const API_KEY = 'AIzaSyDCqCdFznaXXevzggHSzrR7oRmt4o1R5YA';





//Create a new component. This should prodouce
//some html
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {video: []};
        YTSearch({key: API_KEY,term: 'surfboards'}, (videos) =>{
            this.setState({videos});
        });
    }


    render() {
    return (
        <div>

            <SearchBar / >
            <VideoList videos = {this.state.videos} / >
        </div>
    );
    }
}

//Take this component's generated html and put it 
//on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));
