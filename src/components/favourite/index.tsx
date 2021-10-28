import React from 'react';
import './index.css';
import locastorage from '../../services/locastorage';
import FavouriteCard from '../cards/favouriteCard';
import NotFound from '../../pages/notfound';
// import { useDispatch } from 'react-redux';
// import {AiOutlineCloseCircle} from "react-icons/all"
// import {  removeFavouriteCitiesSuccess } from '../../store/weatherRedux/weather_reducer';


const FavouriteCities: React.FC<{}> = () => {
    // const dispatch = useDispatch()
    const favorites = locastorage.get("favourite")
    // const removeTop=(location_name: string | null | undefined)=>{
    //     dispatch(
    //         removeFavouriteCitiesSuccess(location_name as string),
    //     );
    // }

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
                    
                    favorites?.sort((a:any, b: { data: { location: { name: any; }; }; })=> {return a.data.location.name.localeCompare(b.data.location.name)}).map((item:any, index:number) => {
                        return (
                            <div key={index}>
                                {/* <AiOutlineCloseCircle onClick={()=>removeTop(item?.Key)}/> */}
                                <FavouriteCard 
                                    temp_value={item?.data.current.temperature} location_name={item?.data.location.name} 
                                />
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
