import React from 'react';
import './index.css';

const NotFound: React.FC<any> = ({ message, normal_height }) => {
    return <div className={normal_height? "not_found_page_normal_height": "not_found_page_custom_height"}>{message}</div>;
};

export default NotFound;
