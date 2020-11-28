import React from 'react'

const SearchBar = ({changeTerm, placeholder, val}) => {
    return(
    <input 
        placeholder={placeholder}
        onChange={changeTerm}
        value={val}
    /> 
    )  
}

export default SearchBar