import React, { useEffect } from 'react'
import axios from 'axios'
const Home = () => {
    useEffect(()=>{
        const fun=async()=>{
            const data=await axios.get('http://localhost:8000/about')
            console.log(data)
        }
        fun()
    },[])
    return (
        <div className='d-flex justify-content-center align-items-center flex-column home'>
           <h1>welcome in our site</h1>
           <p>web development</p>
        </div>
    )
}

export default Home
