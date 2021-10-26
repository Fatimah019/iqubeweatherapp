import React from 'react';
import './index.css';
import TopCities from '../../components/topcities';

const NotFound: React.FC<any> = ({ message }) => {
    return <div className="not_found_page">{message}</div>;
};

export default NotFound;
