import React, {useEffect, useState} from 'react';
import {Select} from "antd";
import {useDispatch, useSelector} from "react-redux";
import ApiRequest from "../../api/ApiRequest";
import {ActionCreators} from "../../Store/mainReducer/actionCreators";
import {setDefaultSelected, setDefaultState} from "../../utils/setDefaultSelected";

const SelectHouse = () => {
    const [houses, setHouses] = useState([])
    const [selected, setSelected] = useState({label: 'Дом', value: 0})
    const { street } = useSelector(state => state?.main)
    const dispatch = useDispatch()

    useEffect(async () => {
        if (street.id > 0) {
            const data = await ApiRequest.getHouses(street.id)
            setHouses(data)
            setSelected(setDefaultSelected(data))
            dispatch(ActionCreators.setHouse(setDefaultState(data)))
        }
    }, [street.id])

    const onChange = ({ label, value }) => {
        setSelected({label, value})
        dispatch(ActionCreators.setHouse({ name: label, id: value }))
    }

    return (
        <Select
            onChange={onChange}
            value={selected}
            disabled={!street.id > 0}
            labelInValue
            showSearch
            placeholder="Выберите дом"
            optionFilterProp="children"
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            style={{width: 100}}
        >
            {houses.map(house => <Select.Option key={house.id} value={house.id}>{house.name}</Select.Option>)}
        </Select>
    );
};

export default SelectHouse;