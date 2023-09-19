import { TextField, Stack, Button } from "@mui/material";

const DeleteWorker = () => {
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
                />

                <div className="buttons">
                    <Stack spacing={2} direction="row">
                        <Button variant="outlined">Clear</Button>
                        <Button type='submit' variant="contained">Briši</Button>
                    </Stack>
                </div>
            </div>
        </div>
    );
}

export default DeleteWorker;