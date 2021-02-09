import React from 'react'

const Alert = ({value, type}) => {
    return(
        <div className={`alert alert-${type}`} role="alert">
            <h6 className="h6 m-0">{value}</h6>
        </div>
    )
}

export default Alert
