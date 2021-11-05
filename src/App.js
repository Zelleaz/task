import React from 'react';
import {Row} from "antd";
import {HomeOutlined} from '@ant-design/icons'
import Viewer from "./Components/Viewer";
import Selectors from "./Components/Selectors/Selectors";
import Controllers from "./Components/Controllers/Controllers";
import UsersTable from "./Components/Users/UsersTable";

const App = () => {

    return (
        <Row style={{height: '100vh', flexDirection: 'column', flexWrap: 'nowrap'}} justify='center' align='middle'>
            <Row>
                <Viewer />
            </Row>
            <Row style={{marginBottom: 40}}>
                <HomeOutlined style={{fontSize: 30, marginRight: 15, color:'#7696ff'}} />
                <Selectors />
            </Row>

            <UsersTable />

            <Controllers />
        </Row>
    );
};

export default App;