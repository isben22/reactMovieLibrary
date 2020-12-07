import React from 'react'
import axios from 'axios';

class Suggestions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      results: props.results
    }
  }
//   componentDidMount() {
//     axios.get(`http://www.devcodecampmusiclibrary.com/api/music`)
//     .then(res => {
//         const results = res.data;
//         console.log(results);
//         this.setState({results});
//     })
// }
  renderSearchData() {
    return this.state.results.map((results, index) => {
        const { id, title, album, artist, genre, releaseDate } = results
        return (
          <li key={id}>
          {title}
        </li>
        )
    })
}

  render() {
    return (
      <ul>{this.renderSearchData()}</ul>

  )

  }
}
export default Suggestions