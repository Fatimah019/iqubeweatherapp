import React from 'react';
import './index.css';

type CardProps = {
    card_image: string | null | undefined | any | Node;
    card_list: Array<string>;
    card_value: string | null | number | undefined;
};

const OtherWeatherCard: React.FC<CardProps> = ({ card_image, card_list, card_value }) => {
    return (
        <div className="card_container">
            <div>
                <img src={card_image} alt="" />
            </div>
            {card_list && (
                <ul>
                    {card_list?.map((list, index) => {
                        <li key={index}>{list}</li>;
                    })}
                </ul>
            )}
            {card_value && <h1>{card_value}</h1>}
        </div>
    );
};

export default OtherWeatherCard;
