import React from "react";
import { Component } from "react";
import './card.css'

class Card extends Component {
    render() {
        const {cardItem} = this.props
        const {id, title, description, imgUrl, className} = cardItem
        return (
            <div className = {className}>
                <h1 className="card-heading">{title}</h1>
                <p className="card-paragraph">{description}</p>
                <div className="img-container">
                    <img src={imgUrl} className="images" alt="data-scientist"/>
                </div>
            </div>
        )
    }
}

export default Card