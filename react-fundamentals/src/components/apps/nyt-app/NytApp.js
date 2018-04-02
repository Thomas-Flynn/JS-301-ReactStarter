import React, { Component } from 'react';
import NytResults from './NytResults';
import styled from 'styled-components';

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = '86d0f2bd56e2423ea4a1b566d70d68be';

const SubmitButton = styled.button`
  border-radius: 3px;
  padding: 5px;
  background-color: teal;
  color: white;
  border: 1px solid teal;
`;
const FormInput = styled.input`
  padding: 5px;
  color: teal;
  border-radius: 4px;
`;
const FormDiv = styled.div`
  background-color: beige;
`;

export default class NytApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
        search: '',
        startDate: '',
        endDate: '',
        pageNumber: 0,
        results: []
    };
  }
  handleSubmit = (event) => {
    this.setState({pageNumber: 0})
    this.fetchResults()
    event.preventDefault()
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  fetchResults = () => {
    let url = `${baseURL}?api-key=${key}&page=${this.state.pageNumber}&q=${this.state.search}`
    url = this.state.startDate ? url + `&begin_date=${this.state.startDate}` : url
    url = this.state.endDate ? url + `&end_date=${this.state.endDate}` : url
    fetch(url)
      .then(
        (response) => response.json()
      ).then((data) => {
        this.setState({ results: data.response.docs })
      })
  }
  changePageNumber = (e, direction) => {
    e.preventDefault()
    if (direction === 'down') {
      if (this.state.pageNumber > 0) {
        let newPageNumber = this.state.pageNumber - 1
        this.setState({ pageNumber: newPageNumber })
        this.fetchResults();
      }
    }
    if (direction === 'up') {
      let newPageNumber = this.state.pageNumber + 1
      this.setState({ pageNumber: newPageNumber })
      this.fetchResults();
    }
  }

  render() {
    return (
      <FormDiv className="main">
        <FormDiv className="mainDiv">
            <form onSubmit={e => this.handleSubmit(e)}>
                <span>Enter a SINGLE search term (required): </span>
                <FormInput type="text" name="search" onChange={this.handleChange} required /><br />
                <br />
                <span>Enter a start date: </span>
                <FormInput type="date" name="startDate" pattern="[0-9]{8}" onChange={this.handleChange} /><br />
                <br />
                <span>Enter an end date: ß</span>
                <FormInput type="date" name="endDate" pattern="[0-9]{8}" onChange={this.handleChange} /><br />
                <br />
                <SubmitButton className="submit">Submit search</SubmitButton>
            </form>
            {
                this.state.results.length > 0 ? <NytResults results={this.state.results} changePage={this.changePageNumber} /> : <div></div>
            }
        </FormDiv>`
      </FormDiv>
    );
  }
}