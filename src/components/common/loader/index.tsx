import React from 'react';
import './index.css';
import Loader from 'react-loader-spinner';

type Props = {
    visible?: any;
};
const CustomLoader: React.FC<Props> = () => {
    return (
        <div className="custom_loader">
            <Loader type="Oval" color="gray" height={80} width={80} />
        </div>
    );
};

export default CustomLoader;
