import React, {useEffect, useState} from 'react';
import {Select} from "antd";
import ApiRequest from "../../api/ApiRequest";
import {useDispatch} from "react-redux";
import {ActionCreators} from "../../Store/mainReducer/actionCreators";

const SelectStreet = () => {
    const [streets, setStreets] = useState([])
    const dispatch = useDispatch()

    useEffect( async () => {
        const data = await ApiRequest.getStreets()
        setStreets(data)
    }, [])

    const onChange = ({ value, label }) => {
        dispatch(ActionCreators.setStreet({ id: value, name: label }))
    }


    return <Select
        onChange={onChange}
        labelInValue
        showSearch
        notFoundContent='Ничего не найдено'
        placeholder="Выберите улицу"
        optionFilterProp="children"
        filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        style={{width: 240}}
    >
        {streets.map(street => <Select.Option key={street.id} value={street.id}>{street.name}</Select.Option>)}
    </Select>
};

export default SelectStreet;