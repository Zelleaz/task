import React, {useEffect, useState} from 'react';
import {Select} from "antd";
import {useDispatch, useSelector} from "react-redux";
import ApiRequest from "../../api/ApiRequest";
import {setDefaultSelected, setDefaultState} from "../../utils/setDefaultSelected";
import {ActionCreators} from "../../Store/mainReducer/actionCreators";

const SelectFlat = () => {
    const [selected, setSelected] = useState({label: 'Квартира', value: 0})
    const [flats, setFlats] = useState([])

    const { house } = useSelector(state => state?.main)
    const dispatch = useDispatch()

    useEffect(async () => {
        if (house.id > 0) {
            const data = await ApiRequest.getHouseFlats(house.id)
            setFlats(data)
            setSelected(setDefaultSelected(data))
            dispatch(ActionCreators.setHouseFlat(setDefaultState(data)))
        }
    }, [house.id])

    const onChange = ({ value, label }) => {
        setSelected({ value, label })
        dispatch(ActionCreators.setHouseFlat({ id: value, name: label }))
    }

    return (
        <Select
            onChange={onChange}
            value={selected}
            disabled={!house.id > 0}
            labelInValue
            showSearch
            placeholder="Выберите дом"
            optionFilterProp="children"
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            style={{width: 140}}
        >
            {flats.map(flat => <Select.Option key={flat.id} value={flat.id}>{flat.name}</Select.Option>)}
        </Select>
    );
};

export default SelectFlat;