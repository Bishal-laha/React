import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
      let {imgUrl,title,body,newsUrl,author,date,source} = this.props;
    return (
        <div className='container my-3'> 
          <div className="card">
            <img src={imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}... <span className="badge bg-success">{source}</span></h5>
                <p className="card-text">{body}...</p>
                <p className="card-text"><small className="text-muted">By {author==null?'Unknown':author} on {new Date(date).toGMTString()}</small></p>
                <a rel = 'noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
          </div>
        </div>
    )
  }
}

export default NewsItem
