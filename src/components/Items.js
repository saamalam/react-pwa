import React from 'react';
import GuestLayout from './guest-layout';
import axios from 'axios';

class Items extends React.Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      articles: []
    };
  }

  // Lifecycle method
  componentWillMount() {
      
    this.getArticles(this.props.category, this.props.country);
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
    console.log(this.props.category);
    console.log(this.props.country);
    
    if (nextProps.category !== this.props.category) {
      //this.setState({ url: `https://newsapi.org/v2/top-headlines?country=${nextProps.country}&category=${nextProps.category}&apiKey=${process.env.REACT_APP_API_KEY}` });
      this.getArticles(nextProps.category, nextProps.country);
    }
    if (nextProps.country !== this.props.country) {
      
      this.getArticles(nextProps.category, nextProps.country);
    }
  }

  formatDate(date) {
    var time = new Date(date);
    var year = time.getFullYear();
    var day = time.getDate();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var month = time.getMonth() + 1;
    var composedTime = day + '/' + month + '/' + year + ' | ' + hour + ':' + (minute < 10 ? '0' + minute : minute);
    return composedTime;
  }

  getArticles(cat, cou) {
    console.log('responses.......');
    console.log(cat);
    console.log(cou);
    
    // Make HTTP reques with Axios
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=${cou}&category=${cat}&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        const articles = res.data.articles;
        // Set state with result
        
        this.setState({ articles: articles });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <GuestLayout>      
     <div className="cardsContainer">
        {this.state.articles.map((news, i) => {
          return (
            <div className="card" key={i}>
              <div className="content">
                <h3>
                  <a href={news.url} target="_blank" rel="noopener noreferrer">
                    {news.title}
                  </a>
                </h3>
                <p>{news.description}</p>
                <div className="author">
                  <p>
                    By <i>{news.author ? news.author : this.props.category}</i>
                  </p>
                  <p>{this.formatDate(news.publishedAt)}</p>
                </div>
              </div>
              <div className="image">
                <img src={news.urlToImage} alt="" />
              </div>
            </div>       
          );
        })}
        </div>
             
      </GuestLayout>
    );
  }
}
export default Items;
