import React, {useEffect, useState} from 'react';
import {Table} from "antd";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";
import {useDispatch, useSelector} from "react-redux";
import {ClientsActionCreators} from "../../Store/clientsReducer/clientsActionCreators";

const UsersTable = () => {
    const { flat } = useSelector(state => state?.main)
    const { clients } = useSelector(state => state?.clients)
    const dispatch = useDispatch()

    useEffect(async () => {
        if (flat.id > 0) {
            dispatch(ClientsActionCreators.fetchClients(flat.id))
        }
    }, [flat.id])

    const columns = [
        {title: 'Имя', dataIndex: 'name', key: 'name'},
        {title: 'Телефон', dataIndex: 'phone', key: 'phone'},
        {title: 'Email', dataIndex: 'email', key: 'email'},
        {key: 'edit', render: EditUser},
        {key: 'delete', render: DeleteUser}
    ]

    return (
        <>
            {
                clients.length > 0 && <Table
                    size='small'
                    style={{width: '50%'}}
                    dataSource={clients}
                    columns={columns}
                />
            }
        </>
    );
};

export default UsersTable;