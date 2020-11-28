import React from 'react'

const ResultDetail = ({details}) => {
    return(
        <div 
            onClick={() => {console.log(details.url)}}
            style={{marginLeft:'5px', marginRight:'5px'}}>
            <img 
                style={{width: '250px', height: '120px'}}
                src={details.image_url} 
                
            />
            <h3>{details.name}</h3>
            <h3>{details.rating} Stars, {details.review_count} Reviews</h3>
        </div>
    )
}

// const styles = StyleSheet.create({
//     restaurant:{
//         marginLeft: 5,
//         marginRight: 5
//     }
// })

export default ResultDetail;