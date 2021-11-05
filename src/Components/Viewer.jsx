import React from 'react';
import {useSelector} from "react-redux";
import './viewer.css'

const Viewer = () => {
    const {street, house, flat} = useSelector(state => state?.main)

    return (
        <div className='viewer'>
            {street.name && <>ул. {street.name} </>}
            {house.name && <>{house.name} </>}
            {flat.name && <>к. {flat.name}</>}
        </div>
    );
};

export default Viewer;