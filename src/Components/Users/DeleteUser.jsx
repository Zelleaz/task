import React from 'react';
import {Button} from "antd";
import ApiHousingStock from "../../api/ApiHousingStock";
import {useDispatch, useSelector} from "react-redux";
import {ClientsActionCreators} from "../../Store/clientsReducer/clientsActionCreators";

const DeleteUser = ({ bindId }) => {
    const dispatch = useDispatch()
    const { flat } = useSelector(state => state?.main)

    const onClick = async () => {
        await ApiHousingStock.unBindClient(bindId)
        await dispatch(ClientsActionCreators.fetchClients(flat.id))
    }

    return (
        <Button danger type='primary' onClick={onClick}>Отвязать</Button>
    );
};

export default DeleteUser;