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
            </section>
                
        )
    }
 }

 export default Photography
