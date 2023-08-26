import * as React from 'react';

import './card.css'

export default function NewCard({ name, description, img, keyChamp }) {


    const imgChamp = {
        backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${img}_0.jpg)`,
    };

    const imgTag ={
        backgroundImage: `url(https://static.wikia.nocookie.net/leagueoflegends/images/5/5a/Tank_icon.png)`,
        
    }

    return (
        <React.Fragment >

            <div className='card' style={imgChamp}>
                <div className="lateral">
                    <div className="regiao"></div>
                    <p className="champion"> {name} </p>
                </div>
                <div className="espaco">
                    <div className="tagDiv">
                        <div className="tag" style={imgTag}></div>
                        <div className="tag"></div>
                    </div>
                    <p>{description}</p>
                </div>
                <div className="id">
                    <p>#{keyChamp}</p>
                </div>

            </div>

        </React.Fragment>
    );
}
