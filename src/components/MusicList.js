import React from 'react';
import axios from 'axios';
import Table from './table';


export default class MusicList extends React.Component {
    state = {
        music: [],
        loading: true
    }

componentDidMount() {
    axios.get(`http://www.devcodecampmusiclibrary.com/api/music`)
    .then(res => {
        const music = res.data;
        console.log(music);
        this.setState({music});
        this.setState({loading:false})
    })
}

render() {
    return ( this.state.loading ? <div>Loading...</div> :
        // <ul>
        // {/* {this.state.music[0].title} */}
        // {this.state.music.map(song => <li>{song.title + song.artist + song.releaseDate}</li>)}
        // </ul>
        <Table music={this.state.music} />
        )
    }
}
