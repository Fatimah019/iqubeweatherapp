import React from 'react';
import './index.css';
import locastorage from '../../services/locastorage';
import FavouriteCard from '../cards/favouriteCard';
import NotFound from '../../pages/notfound';

const FavouriteCities: React.FC<{}> = () => {
    const favorites = locastorage.get("favourite")

    return (
        <div>
            <div className="favourite_city_card_header">
                <img src="/assets/icons/app_icon.png" alt="" />
                <p>Favourites</p>
            </div>
            {
                !favorites? <NotFound message="No Favourite Yet"/>:
                <div className="favourite_city_container">
                <div className="favourite_city_card_container">
                    { 
                    
                    favorites?.map((item:any, index:number) => {
                        return (
                            <div key={index}>
                                <FavouriteCard 
                                    temp_value={item?.data.current.temperature} location_name={item?.data.location.name} />
                            </div>
                        );
                    })}
                </div>
            </div>
            }
            
        </div>
      
    );
};

export default FavouriteCities;
