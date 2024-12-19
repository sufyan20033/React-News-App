import React, { Component } from 'react'
import Newscomponent from './Newscomponent'
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country: "us",
    pageSize: 5,
    category: "general"
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }


  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=60ed2abf30314444a04ecaff9bed9833&page=1&pagesize=${this.props.pageSize}`
    this.setState({loading : true})
    let data = await fetch(url)
    let pd = await data.json()
    this.setState({ articles: pd.articles })
    this.setState({loading : false})
  }
  clickpre=async()=>{
    console.log("pre");
    this.setState({
      page: this.state.page - 1,
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=60ed2abf30314444a04ecaff9bed9833&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`
    this.setState({loading : true})
    let data = await fetch(url)
    let pd = await data.json()
    this.setState({ articles: pd.articles })
    this.setState({loading : false})

  }
  clickNext= async()=>{
    console.log("next");
    this.setState({
      page: this.state.page + 1,
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=60ed2abf30314444a04ecaff9bed9833&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`
    this.setState({loading : true})
    let data = await fetch(url)
    let pd = await data.json()
    this.setState({ articles: pd.articles })
    this.setState({loading : false})


  }

  render() {
    return (
      <div className="container my-4 my-5">
        <h2 className='text-center' style={{color: 'red'}}>Voice of Pakistan-Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row container">
          {!this.state.loading   &&  this.state.articles.map((element) => {
            return <div className="col-md-4 my-5 container" key={element.url}>
              <Newscomponent title={element.title.slice(0, 65)}

                description={element.description ? element.description.slice(0, 50) : " "}
                url={element.urlToImage}
                news={element.url}
                author={element.author}
                time={element.publishedAt}
                source={element.source.name}></Newscomponent>
                
            </div>
          })}



        </div>
        <div div className="container d-flex justify-content-between ">
          <button type="button" disabled={this.state.page<=1} className="btn btn-dark"  onClick={this.clickpre}>&laquo; Previous</button>
          <button type="button" disabled={this.state.page>=3} className="btn btn-dark" onClick={this.clickNext}>Next &raquo;</button>
        </div>
      </div>
    )
  }
}

export default News
