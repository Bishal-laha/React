import React, { Component } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    static defaultProps = {
        country:'in',
        pageSize:15,
        category:'general'
    }

    capitaize = (String)=>{
      return String.charAt(0).toUpperCase() + String.slice(1);
    }

    constructor(props){//constructor is for initializing state
      super(props);
      console.log('I am a constructor');
      this.state = {
        articles : [],//article is null
        loading : false,
        page : 1,
        pageSize:15
      }
      document.title = this.capitaize(this.props.category) + ' - NewsMonk';
    }

    async updateNews(){
      console.log("cdm");
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});//for spinner work
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState(
        { articles:this.state.articles.concat(parsedData.articles),
          totalPage:parsedData.totalResults,
          loading:false
        });//for spinner not work
    }

    async componentDidMount(){//this is for first time fetching news on the page
      this.updateNews();
    }

    fetchMoreData = () => {
      this.setState({page:this.state.page+1});
      this.updateNews();
    };

  render() {
    return (
      <>
          <h2 className='text-danger text-center' style={{marginTop : '60px'}}>NewsMonk -- Top {this.capitaize(this.props.category)} Headlines !!Explore!!</h2>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalPage}
            loader={<Spinner/>}
          >
          <div className="container">
          <div className="row">
              {this.state.articles.map((element)=>{//when loading is false then show news items
                  return <div className="col-md-4" key={element.url}>
                    <NewsItem imgUrl={element.urlToImage} title={element.title?element.title.slice(0,40):""} body={element.content?element.content.slice(0,90):""} newsUrl = {element.url} author = {element.author} date = {element.publishedAt} source = {element.source.name}/>
                  </div>  
              })}  
          </div>
          </div>
          </InfiniteScroll>   
      </>
    )
  }
}

export default News
