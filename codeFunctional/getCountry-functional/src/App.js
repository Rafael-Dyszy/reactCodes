import React, { Component } from 'react';
import Countries from './components/countries/Countries';
import Header from './components/header/Header';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      allCountries: [],
      filteredCountries: [],
      filteredPopulation: 0,
      filter: '',
    }
  }

  async componentDidMount(){
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const json = await res.json();

    const allCountries = json.map(({name, numericCode, flag, population, totalPopulation})=>{
      return {
        id: numericCode,
        name,
        filterName: name.toLowerCase(),
        flag,
        population,
        totalPopulation,
      }
    });
    
    const filteredPopulation = this.calculateTotalPopulationFrom(allCountries);

    this.setState({
      allCountries,
      filteredCountries: Object.assign([], allCountries),
      filteredPopulation,
    });    
  }

  calculateTotalPopulationFrom = (countries) => {
    const totalPopulation = countries.reduce((acc, curr) => {
      return acc + curr.population;
    }, 0);
    return totalPopulation;
  }

  handleChangeFilter = (newText) => {
      this.setState({
        filter: newText,
      });
      const filteredLowerCase = newText.toLowerCase();

      const filteredCountries = this.state.allCountries.filter((country) => {
        return country.filterName.includes(filteredLowerCase);
      });

      const filteredPopulation = this.calculateTotalPopulationFrom(filteredCountries);


      this.setState({
        filteredCountries,
        filteredPopulation,
      });
    }
  

  render() {
    const { filter, filteredCountries, filteredPopulation} = this.state;
    return (
      <div className="container">
        <h1 style={{textAlign: 'center'}}>React Countries</h1>
        <Header filter={filter} countryCount={filteredCountries.length} totalPopulation={filteredPopulation} onChangeFilter={this.handleChangeFilter}/>
        <Countries countries={filteredCountries}/>
    </div>
    )
  }
}
