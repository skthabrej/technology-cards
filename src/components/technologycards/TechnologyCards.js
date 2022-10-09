import React from "react";
import { Component } from "react";
import './TechnologyCards.css'
import Card from "../card/card";

const cardsData = [
    {
      id: '1',
      title: 'Data Scientist',
      description:
        'Data scientists gather and analyze large sets of structured and unstructured data',
      imgUrl: 'https://i.ibb.co/Vqv40gD/e0893b13-0ae7-42a4-bb10-09198eace7b8-original.jpg',
      className: 'card-1',
    },
    {
      id: '2',
      title: 'IOT Developer',
      description:
        'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
      imgUrl: 'https://i.ibb.co/V3qYcpK/IoT-Fig3.png',
      className: 'card-2',
    },
    {
      id: '3',
      title: 'VR Developer',
      description:
        'A VR developer creates completely new digital environments that people can see.',
      imgUrl: 'https://i.ibb.co/6wnXNK1/developer-moving-objects-around-using-virtual-reality-vr-headset-cartoon-vector-illustration-122058.jpg',
      className: 'card-3',
    },
    {
      id: '4',
      title: 'ML Engineer',
      description:
        'Machine learning engineers feed data into models defined by data scientists.',
      imgUrl: 'https://i.ibb.co/7gb4bjj/shutterstock-2060319506-11zon-d65dc65825.jpg',
      className: 'card-4',
    },
  ]

class TechnologyCards extends Component {
    render() {
        return(
            <div className="bg-container">
                <h1 className="heading">Top Technologies To Learn</h1>
                <p className="paragraph">Get trained by alumni of IITs and top companies like Amazon,Microsoft,Intel,Nvidia,Qualcomm,etc.Learn directly from proffesionals involved in Product Devlopment</p>
                <div className="cards-container">
                    {cardsData.map(eachitem => <Card cardItem = {eachitem} key = {eachitem.id}/>)}
                </div>
            </div>
        )
    }
}

export default TechnologyCards