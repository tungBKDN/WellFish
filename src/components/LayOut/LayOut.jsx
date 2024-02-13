import React from 'react'
import Navbar from '../Navbar/Navbar'

const LayOut = ({children}) => {
    if(children.type.name === 'Login'){
        return (
            <>
                {children}
            </>
        )
    }
    return (
        <>
            <Navbar />
            {children}
        </>
    )
    
}

export default LayOut