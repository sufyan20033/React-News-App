import React, { Component } from 'react'


export class Newscomponent extends Component {

  

  render() {
    let {title,description,url,news,author,time,source} = this.props
    return (
      <div>
        <div className="card">
          <img src={url} className="card-img-top" alt="..." />
          <div className="card-body">
          <span class="badge bg-secondary my-3">{source}</span>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {author} At {new Date(time).toGMTString()}</small></p>
            <a href={news} rel="noreferrer" target="_blank" className="btn btn-dark">Learn More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newscomponent
