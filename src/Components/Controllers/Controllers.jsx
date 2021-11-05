import React, {useState} from 'react';
import {Button, Row} from "antd";
import {useSelector} from "react-redux";
import BindClient from "../Modals/BindClient/BindClient";

const Controllers = () => {
    const [isVisible, setIsVisible] = useState(false)
    const {street, house, flat} = useSelector(state => state?.main)

    const onClick = () => {
        setIsVisible(!isVisible)
    }

    if (street.name && house.name && flat.name) {
        return (
            <>
                <Button onClick={onClick} style={{marginRight: 15}} type='primary'>Добавить клиента</Button>
                <BindClient setIsVisible={setIsVisible} isVisible={isVisible} />
            </>
        );
    }

    return null
};

export default Controllers;