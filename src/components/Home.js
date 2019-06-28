import React, { Component } from 'react';
// import axios from 'axios';
import Item from './Items';
// import Outlet from './Outlet';

class Home extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
            
      cateogies: ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'],
      countries:['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', ' hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'],
      // default value:'bbc-news'
      cat:'business',
      cou: 'ae'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeCountry = this.handleChangeCountry.bind(this);

   // this.apiUrl = `https://newsapi.org/v2/sources?language=en&apiKey=${process.env.REACT_APP_API_KEY}`;
  }

  handleChange(event) {
    this.setState({cat: event.target.value});
    
  }

  handleChangeCountry(event) {
    this.setState({cou: event.target.value});
    
  }

  // Lifecycle method
  //componentWillMount() {
    // Make HTTP reques with Axios
    // axios.get(this.apiUrl).then(res => {
    //   // Set state with result
    //   this.setState({ data: res.data.sources });
    //   this.setState({ count: res.data.sources.length });      
    // });
  //}

  render() {
    return (
      <div className="">
        <div className="searchArea">
          <div className="category">
        <h4>News Category</h4>
        <select value={this.state.cat} onChange={this.handleChange}>
          >
          {this.state.cateogies.map((cat, i) => {
            return (
              <option key={i} value={cat}>
                {cat}
              </option>
            );
          })}
        </select>
        </div>
        <div className="country">
        <h4>Your Country</h4>
        <select value={this.state.cou} onChange={this.handleChangeCountry}>
          >
          {this.state.countries.map((country, i) => {
            return (
              <option key={i} value={country}>
                {country}
              </option>
            );
          })}
        </select>
        </div>
        </div>
        
        {/* <Outlet default={this.state.value} /> */}
        <Item category={this.state.cat} country={this.state.cou} />
      </div>
    );
  }
}

export default Home;