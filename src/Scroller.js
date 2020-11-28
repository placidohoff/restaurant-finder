import React from 'react'

const Scroller = (props) => {
    return (
        <div style={{overflowX: 'scroll'}}>
            {props.children}

        </div>
    )

}

export default Scroller