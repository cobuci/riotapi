import * as React from 'react';
import { useState } from 'react';
import './card.css'
import atkIcon from '../../assets/images/sword.png'
import defIcon from '../../assets/images/shield.png'
import magIcon from '../../assets/images/magic.png'
import difIcon from '../../assets/images/skull.png'


export default function NewCard({ name, description, img, keyChamp, tag, attribute }) {


    let imgChamp = {};

    if (typeof img !== 'undefined') {
        imgChamp = {
            backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${img}_0.jpg)`,
        };
    }
    const [tag1, tag2] = tag != null ? tag : [null, null];


    const getTagImageUrl = (tag) => {
        switch (tag) {
            case "Tank":
                return "https://static.wikia.nocookie.net/leagueoflegends/images/5/5a/Tank_icon.png";
            case "Assassin":
                return "https://static.wikia.nocookie.net/leagueoflegends/images/2/28/Slayer_icon.png";
            case "Mage":
                return "https://static.wikia.nocookie.net/leagueoflegends/images/2/28/Mage_icon.png/";
            case "Support":
                return "https://static.wikia.nocookie.net/leagueoflegends/images/5/58/Controller_icon.png";
            case "Fighter":
                return "https://static.wikia.nocookie.net/leagueoflegends/images/8/8f/Fighter_icon.png";
            case "Marksman":
                return "https://static.wikia.nocookie.net/leagueoflegends/images/7/7f/Marksman_icon.png";
            default:
                return "";
        }
    };

    const imgTag = {
        backgroundImage: `url(${getTagImageUrl(tag1)})`,
    };

    const imgTag2 = {
        backgroundImage: `url(${getTagImageUrl(tag2)})`,
    };

    const progresso = {

    }



    return (
        <React.Fragment >

            <div className="flip-container">
                <div className="flipper">
                    <div className="front">
                        <div className='card' style={imgChamp}>
                            <div className="lateral">
                                <div className="regiao"></div>
                                <p className="champion"> {name} </p>
                            </div>
                            <div className="espaco">
                                <div className="footer">
                                    <div className="tagDiv">
                                        <div className="tag" style={imgTag}></div>
                                        <div className="tag" style={imgTag2}></div>
                                    </div>
                                    <p>{description}</p>
                                </div></div>
                            <div className="id">
                                <p>#{keyChamp}</p>
                            </div>

                        </div>
                    </div>
                    <div className="back">
                        <div className='card' style={imgChamp}>
                            <div className="linearGradient">
                                <div className="attributes">
                                    <div className="atk">
                                        <div className="attributeName">
                                            <p>Atk</p>
                                            <img src={atkIcon} className="icon"></img>
                                        </div>
                                        <div className="progresso progress-attack">
                                            <span style={{ width: `${attribute?.attack * 10}%` }} />
                                        </div>
                                    </div>

                                    <div className="def">
                                        <div className="attributeName">
                                            <p>Def</p>
                                            <img src={defIcon} className="icon"></img>
                                        </div>
                                        <div className="progresso progress-def">
                                            <span style={{ width: `${attribute?.defense * 10}%` }} />
                                        </div>
                                    </div>

                                    <div className="mag">
                                        <div className="attributeName">
                                            <p>Magic</p>
                                            <img src={magIcon} className="icon"></img>
                                        </div>
                                        <div className="progresso progress-mag">
                                            <span style={{ width: `${attribute?.magic * 10}%` }} />
                                        </div>
                                    </div>

                                    <div className="dif">
                                        <div className="attributeName">
                                            <p>Difficulty</p>
                                            <img src={difIcon} className="icon"></img>
                                        </div>

                                        <div className="progresso progress-dif">
                                            <span style={{ width: `${attribute?.difficulty * 10}%` }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>
    );
}
