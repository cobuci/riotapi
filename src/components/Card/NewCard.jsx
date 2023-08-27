import * as React from 'react';

import './card.css'


export default function NewCard({ name, description, img, keyChamp, tag }) {


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


    return (
        <React.Fragment >
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

        </React.Fragment>
    );
}
