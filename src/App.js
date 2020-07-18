
import React, { Component } from 'react'

import Cards from './Components/Cards/Cards';
import Charts from './Components/Charts/Charts';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import {fetchData} from './api'
import corona from './co19.jpg'

// import {Cards, Charts, CountryPicker} from './Components';

import styles from './App.css';

class App extends Component {

  state={
data: {},
country:'',
  }



async componentDidMount(){
const fetchedData = await fetchData();

this.setState({data: fetchedData});
}

handleCountryChange = async(country)=>{
  const fetchedData = await fetchData(country);
  console.log(fetchedData);
  console.log(country);

this.setState({data: fetchedData, country: country})
}

  render() {
    const {data, country} = this.state;
    return (
      <div className="container">
       <img src={corona} style={{width:"28%", marginTop:"20px"}}/>
      <Cards data={data}/>
     
<CountryPicker handleCountryChange={this.handleCountryChange}/>

<Charts data={data} country={country}/>
      </div>
    )
  }
}


export default App;
