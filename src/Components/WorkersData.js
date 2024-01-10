import axios from 'axios';
import React, {useState, useEffect} from "react";

import Worker from './Subcomponents/Worker';

const WorkersData = () => {
    const [workers, setWorkers] = useState([]);

    useEffect( () => { 
        async function fetchData() {
            try {
                const result = await axios.get('https://tmzky8bdrd.execute-api.eu-central-1.amazonaws.com/default/viewAllWorkers').then(resp => {
                    return resp.data.result;
                });
                setWorkers(result);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);
    
    return(
        <div className="container">
            <h1>Podaci o svim szaposlenima</h1>
            <div className='workersList'>
                {workers.map(worker => <Worker worker={worker} />)}           
            </div>
            <div className='buttons'>
            </div>
        </div>
    );
}

export default WorkersData;