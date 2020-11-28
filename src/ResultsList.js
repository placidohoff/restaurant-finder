import React from 'react'
import ResultDetail from './ResultDetail.js'
import Scroller from './Scroller.js'

const ResultsList = ({title, results}) => {
    return(
    <div>
        <h1>{title}</h1>
        <Scroller>
        <div style={{display:'flex', flexDirection:'row'}}>
        {results.map(result =>
            <ResultDetail 
                details={result}
            />    
        )}
        </div>
        </Scroller>
    </div>
    )
}

export default ResultsList