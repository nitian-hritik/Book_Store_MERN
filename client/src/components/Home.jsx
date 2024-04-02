import React, { useEffect } from 'react'
import '../css/Home.css'
import axios from 'axios'

const Home = ()=>{
    // axios.defaults.withCredentials = true;
    // useEffect(()=>{
    //     axios.get('http://localhost:3001/auth/verify')
    //     .then(res=>{
    //         if(res.data.login){
    //             setRole(res.data.role)
    //         }else{
    //          setRole('')
    //         }
    //     })
    //     .catch(err=>console.log(err))
    // },[])

    return (
        <div className='hero'>
            <div className="hero-content">
                <h1 className='hero-text'>Book Shop</h1>
                <p className ='hero-description'>
                    Browse the collection of our best top interesting Books.
                    You are definitely find out what you are looking for.
                </p>
            </div>
            <div className="hero-image"></div>
        </div>
    )
}

export default Home