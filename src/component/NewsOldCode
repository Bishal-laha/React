// import React, { Component } from 'react'

// import NewsItem from './NewsItem'
// import Spinner from './Spinner';


// export class News extends Component {
//     static defaultProps = {
//         country:'in',
//         pageSize:15,
//         category:'general'
//     }

//     // static propTypes = {
//     //   country:propTypes.string,
//     //   pageSize:propTypes.number,
//     //   category:propTypes.string
//     // }

//     capitaize = (String)=>{
//       return String.charAt(0).toUpperCase() + String.slice(1);
//     }

//     constructor(props){//constructor is for initializing state
//       super(props);
//       console.log('I am a constructor');
//       this.state = {
//         articles : [],//article is null
//         loading : false,
//         page : 1,
//         pageSize:15
//       }
//       document.title = this.capitaize(this.props.category) + ' - NewsMonk';
//     }

//     async updateNews(){
//       console.log("cdm");
//       let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=24a19b7e2ad24a31b04e9e84f379f39e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//       this.setState({loading:true});//for spinner work
//       let data = await fetch(url);
//       let parsedData = await data.json();
//       console.log(parsedData);
//       this.setState({articles:parsedData.articles,totalPage:parsedData.totalResults,loading:false});//for spinner not work
//     }

//     async componentDidMount(){//this is for first time fetching news on the page
//       this.updateNews();
//     }
    
//     handleNextClick= async ()=>{
//       console.log('Next');
//       // if(!(this.state.page+1 > Math.ceil(this.state.totalPage/this.state.pageSize))){//if page contains no more news cards
//       // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=24a19b7e2ad24a31b04e9e84f379f39e&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
//       // this.setState({loading:true});
//       // let data = await fetch(url);
//       // let parsedData = await data.json();
//       // console.log(parsedData);
//       // this.setState({
//       //   articles:parsedData.articles,
//       //   page : this.state.page+1,
//       //   loading:false
//       // })
//       // }
//       this.setState({page:this.state.page+1});
//       this.updateNews();
//     }

//     handlePrevClick= async ()=>{
//       console.log('Previous');
//       this.setState({page:this.state.page-1});
//       this.updateNews();
//     }

//   render() {
//     return (
//       <div className = "container my-4">
//           <h2 className='text-danger text-center'>NewsMonk -- Top {this.capitaize(this.props.category)} Headlines !!Explore!!</h2>
//           {this.state.loading && <Spinner/> }
//           <div className="row">
//               {!this.state.loading && this.state.articles.map((element)=>{//when loading is false then show news items
//                   return <div className="col-md-4" key={element.url}>
//                     <NewsItem imgUrl={element.urlToImage} title={element.title?element.title.slice(0,40):""} body={element.content?element.content.slice(0,90):""} newsUrl = {element.url} author = {element.author} date = {element.publishedAt} source = {element.source.name}/>
//                   </div>  
//               })}  
//           </div>
//           <div className="container d-flex justify-content-between">
//             <button disabled={this.state.page<=1} type="button" className="btn btn-success" onClick={this.handlePrevClick}>&larr; Prev</button>
//             <button disabled={this.state.page+1 > Math.ceil(this.state.totalPage/this.state.pageSize)} type="button" className="btn btn-warning" onClick={this.handleNextClick}>Next &rarr;</button>
//           </div>
        
//       </div>
//     )
//   }
// }

// export default News
