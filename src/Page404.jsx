import React from 'react'
import Error from './404.png'
import './Error.css'
const Page404 = () => {
    return (
        <div> <img src={Error} alt="404 Not found" />
            <h1>Invalid URL, 404 Error not found</h1>
            <p>This is a 404 error, which means you've clicked on a bad link or entered an invalid URL. Maybe what you are looking for can be found at <a href="https://developerpritam.in" >developerpritam.in</a>. P.S. Eco Link links are case sensitive.</p>
        </div>
    )
}

export default Page404
