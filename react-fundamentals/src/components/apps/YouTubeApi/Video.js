import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import styled from 'styled-components';

const Window = styled.div`
width: 100%;
border: 1px solid gray;
padding: 10px;
float: left;
// height: 350px;
overflow: scroll;
margin: 5px; 
`;

const API_KEY = 'AIzaSyCgRLXm43YQXW_rxjyWzo3ODRGd7SahN7c';

class Video extends Component {
    constructor (props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('React Tutorials');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            console.log('Videos: ', videos);
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        })
    }
    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 1800);
        return (
            <div className="main">
                <Window className="mainDiv">
                    <h1 className="section-title">React Video Search </h1>
                    <h3>Based on Stephen Grider's work on Udemy</h3>

                    <SearchBar onSearchTermChange={videoSearch} />
                    <VideoDetail video={this.state.selectedVideo} />
                </Window>
            </div>
        );
    }
}

export default Video;