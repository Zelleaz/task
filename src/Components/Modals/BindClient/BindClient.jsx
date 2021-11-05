import React from 'react';
import {Modal, Form, Input, Checkbox, Button} from 'antd'
import ApiHousingStock from "../../../api/ApiHousingStock";
import {useDispatch, useSelector} from "react-redux";
import {ClientsActionCreators} from "../../../Store/clientsReducer/clientsActionCreators";

const BindClient = ({ isVisible, setIsVisible }) => {

    const { flat } = useSelector(state => state?.main)
    const dispatch = useDispatch()

    const onFinish = async (values) => {
        const { bind, email, name, phone } = values

        if (bind) {
            await ApiHousingStock.createAndBindClient({
                AddressId: flat.id,
                Email: email,
                Name: name,
                Phone: phone
            })
        } else {
            await ApiHousingStock.createClient({ Name: name, Email: email, Phone: phone })
        }
        await dispatch(ClientsActionCreators.fetchClients(flat.id))
        closeModal()
    }

    const closeModal = () => {
        setIsVisible(false)
    }

    return (
        <Modal
            title='Создание и привязка клиента'
            visible={isVisible}
            onOk={closeModal}
            onCancel={closeModal}
        >
            <Form onFinish={onFinish}>
                <Form.Item
                    label='ФИО'
                    name='name'
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label='Email'
                    name='email'
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label='Номер телефона'
                    name='phone'
                    rules={[{required: true, message: 'Введите номер телефона!'}]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="bind" valuePropName="checked">
                    <Checkbox>Привязать к квартире</Checkbox>
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Создать
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default BindClient;