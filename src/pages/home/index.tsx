import React from 'react';
import TopCities from '../../components/topcities';
import FavouriteCities from '../../components/favourite';

const Home: React.FC<{}> = () => {
    return (
        <>
            <FavouriteCities/>
            <TopCities />
        </>
    );
};

export default Home;
