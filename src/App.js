import React, {useEffect, useState} from 'react';
import ApiRequest from "./api/ApiRequest";

const App = () => {
    const [streets, setStreets] = useState([])


    useEffect( async () => {
        const data = await ApiRequest.getStreets()
        setStreets(data)
    }, [])


    useEffect(() => {
        console.log('streets', streets)
    }, [streets])

    return (
        <div>
          asd
        </div>
    );
};

export default App;