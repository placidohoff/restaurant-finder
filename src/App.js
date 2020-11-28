
import React, {useEffect, useState, Component} from 'react'
import './App.css';
import SearchBar from './SearchBar.js';
import ResultsList from './ResultsList.js'
import yelp from './yelp.js' 
import Scroller from './Scroller.js'




function App() {
  const [results, setResults] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [foodTerm, setFoodTerm] = useState('pasta')
  const [location, setLocation] = useState('providence')

  const searchApi = async (searchTerm) => {
    //console.log("Testing");
    try {
     const response = await yelp.get('/search', {
        params: {
            limit: 50,
            term: searchTerm,
            location: location
    }});
    setResults(response.data.businesses);
    console.log(response.data.businesses)
    }catch(e){
        setErrorMessage('Something went wrong');
        console.log(e)
      }


  }

  const filterResultsByPrice = (price) => {
    //price === '$' || '$$' ||| '$$$'
    let filteredResults = [];
    for(let i = 0; i < results.length; i++){
        if(results[i].price == price)
            filteredResults.push(results[i])

    }
    return filteredResults;
  };

  

  useEffect(() => {
    searchApi(foodTerm);
  }, [])

  const changeFoodTerm = (event) => {
    setFoodTerm(event.target.value)
    console.log({foodTerm})
  }

  return (
    <div className="App">
      {/* <SearchBar 
        onChange={setFoodTerm}
        placeholder="Type of Food"
        value={foodTerm}

      /> */}
      <form>
        <input 
          style={{
            marginTop: '5px',
            padding:'1rem',
            borderStyle:'solid;border-width:1px',
            borderColor:'#19a974',
            fontSize: '16px'
          }}
          placeholder="Name of City"
          onChange={e => setLocation(e.target.value)}
        />
      <input 
        //value={foodTerm}
        style={{
          padding:'1rem',
          borderStyle:'solid;border-width:1px',
          borderColor:'#19a974',
          fontSize: '16px'
        }}
        placeholder="Type of Food"
        onChange={e => setFoodTerm(e.target.value)}
      />
      <br />
      <button
      style={{
        padding: '5px',
        marginTop: '5px',
        fontSize: '16px'
      }}
        type="submit"
        onClick={(e) =>{
          e.preventDefault();
          searchApi(foodTerm)
        
        }}
      >
        Search
      </button>
      </form>
      {/* <Scroller> */}
        <ResultsList 
          title="Cost Effective"
          results={filterResultsByPrice('$')}
        />
      {/* </Scroller> */}
      {/* <Scroller> */}
        <ResultsList 
          title="Bit Pricier"
          results={filterResultsByPrice('$$')}
        />
      {/* </Scroller> */}
      {/* <Scroller> */}
        <ResultsList 
          title="Big Spender"
          results={filterResultsByPrice('$$$')}
        />
      {/* </Scroller> */}

    </div>
  );
}

export default App;
