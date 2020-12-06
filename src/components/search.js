import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from './suggestions'

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(`http://www.devcodecampmusiclibrary.com/api/music`)
      .then(({ data }) => {
        console.log(data);
        this.setState({
          results: data.data
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    )
  }
}

export default Search

/* <Form className="md-form mr-auto mb-4">
<input className="form-control sm-2" type="text" placeholder="Search" aria-label="Search" width="50em" />
<Button variant="primary-outline" size="lg"> Search </Button>{' '}
</Form> */


/* <div> <Button variant="outline-primary" size="lg"> Search </Button>{' '} </div> */ 

