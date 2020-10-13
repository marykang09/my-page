import React, { Component } from 'react'
import Feed from "react-instagram-authless-feed"
 
class Photography extends Component {

    render(){
        return (
            <section id="photography">
                <h1> Film Photography </h1>
                <p> I've recently become somewhat of a film photography hobbyist.</p>
                <p> Below is my Instagram feed. I hope you enjoy browsing! </p>
                <Feed 
                userName="marykang.film"
                className="Feed"
                classNameLoading="Loading"/>
                {/* <div className="powr-instagram-feed" id="1ed0faaa_1602541617"></div><script src="https://www.powr.io/powr.js?platform=html"></script> */}
            </section>
                
        )
    }
 }

 export default Photography
