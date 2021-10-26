import React from 'react';
import './index.css';

type CardProps = {
    card_title?: string;
    card_image?: Array<string> | string | null | undefined | any | Node;
    description?: Array<string> | string | null | undefined | any | Node;
    card_list?: Array<string> | string | undefined | any | Node;
    card_width_big?: string | null | undefined | any | Node;
    card_value?: string | null | number | undefined;
};

const WeatherCard: React.FC<CardProps> = ({
    card_title,
    card_image,
    description,
    card_list,
    card_value,
    card_width_big,
}) => {
    return (
        <>
            <p>{card_title && card_title}</p>

            <div className={card_width_big ? 'card_container_big' : 'card_container'}>
                <div className="card_image">
                    <img src={card_image} alt="" />
                </div>
                <div className="card_list">
                    {description && <p>{description}</p>}
                    {card_list && (
                        <ul>
                            {card_list?.map((list: any, index: any) => {
                                return <li key={index}> {list}</li>;
                            })}
                        </ul>
                    )}
                </div>

                {card_value && <h1 className="card_value">{card_value}</h1>}
            </div>
        </>
    );
};

export default WeatherCard;
