import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from "./components/video_details";

const API_KEY = 'AIzaSyDCqCdFznaXXevzggHSzrR7oRmt4o1R5YA';





//Create a new component. This should produce
//some html
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('meme');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY,term: term}, (videos) =>{
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }



    render() {
    return (
        <div>

            <SearchBar onSearchTermChange={term => this.videoSearch(term)} / >
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
                onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                videos = {this.state.videos} / >
        </div>
    );
    }
}

//Take this component's generated html and put it 
//on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));
