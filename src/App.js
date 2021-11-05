import React, {useEffect} from 'react';
import {Row} from "antd";
import {useSelector} from "react-redux";
import Viewer from "./Components/Viewer";
import Selectors from "./Components/Selectors/Selectors";

const App = () => {

    const state = useSelector(state => state?.main)

    useEffect(() => {
        console.log('state', state)
    }, [state])

    return (
        <Row style={{height: '100vh', flexDirection: 'column'}} justify='center' align='middle'>
            <Row>
                <Selectors />
            </Row>

            <Row>
                <Viewer />
            </Row>
        </Row>
    );
};

export default App;