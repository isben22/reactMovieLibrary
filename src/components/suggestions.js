import React from 'react'

class Suggestions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      results: props.results
    }
  }
  renderSearchData() {
    return this.state.results.map((results, index) => {
        const { id, title, album, artist, genre, releaseDate } = results
        return (
          <li key={id}>
          {title}, {artist} 
        </li>
        )
    })
}

  render() {
    return (
      <ul id="searchResultList">{this.renderSearchData()}</ul>

  )

  }
}
export default Suggestions