import React from "react";
import { Component } from "react";
import './TechnologyCards.css'

class TechnologyCards extends Component {
    render() {
        return(
            <div className="bg-container">
                <h1 className="heading">Top Technologies To Learn</h1>
                <p className="paragraph">Get trained by alumni of IITs and top companies like Amazon,Microsoft,Intel,Nvidia,Qualcomm,etc.Learn directly from proffesionals involved in Product Devlopment</p>
                <div className="cards-container">
                    <div className="card-1">
                        <h1 className="card-heading">Data Scientist</h1>
                        <p className="card-paragraph">Data scientists gather and analyze large sets of structure and unstructered data</p>
                        <div className="img-container">
                            <img src="https://i.ibb.co/Vqv40gD/e0893b13-0ae7-42a4-bb10-09198eace7b8-original.jpg" className="images"/>
                        </div>
                    </div>
                    <div className="card-2">
                        <h1 className="card-heading">IOT Devloper</h1>
                        <p className="card-paragraph">IOT Devlopers are proffesionals who can devlop,manage,and monitor IOT Devices</p>
                        <div className="img-container">
                            <img src="https://i.ibb.co/V3qYcpK/IoT-Fig3.png" className="images"/>
                        </div>
                    </div>
                    <div className="card-3">
                        <h1 className="card-heading">VR Devloper</h1>
                        <p className="card-paragraph">A VR Devloper creates completely new digital environment that people can see</p>
                        <div className="img-container">
                            <img src="https://i.ibb.co/6wnXNK1/developer-moving-objects-around-using-virtual-reality-vr-headset-cartoon-vector-illustration-122058.jpg" className="images"/>
                        </div>
                    </div>
                    <div className="card-4">
                        <h1 className="card-heading">ML Engineer</h1>
                        <p className="card-paragraph">Machine Learning engineers feed data into models defined by data scientists</p>
                        <div className="img-container">
                            <img src="https://i.ibb.co/7gb4bjj/shutterstock-2060319506-11zon-d65dc65825.jpg" className="images"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TechnologyCards