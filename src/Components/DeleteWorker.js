import { TextField, Stack, Button } from "@mui/material";
import axios from 'axios';
import {useState} from "react";

const deleteById = (id) => {
    axios.post('https://mzzt1rsxqi.execute-api.eu-central-1.amazonaws.com/default/deleteWorker', {
        "id": id,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}


const DeleteWorker = () => {
    const log = () => {
        console.log(id);
    }
    const [id, setId] = useState("");
    const changeIdHandler = e => {
        setId(e.target.value);
    }
    return(
        <div>
            <h1>Brisanje radnika</h1>
            <div className="inputField workerID">
                <TextField
                    required
                    label='ID zaposlenog'
                    variant='standard'                            
                    type="number"
                    name='workerID'
                    value={id}
                    onChange={changeIdHandler}
                />

                <div className="buttons">
                    <Stack spacing={2} direction="row">
                        <Button 
                            type='submit'
                            variant="contained"
                            onClick={() => {deleteById(id)}}>
                        Briši
                        </Button>
                    </Stack>
                </div>
            </div>
        </div>
    );
}

export default DeleteWorker;