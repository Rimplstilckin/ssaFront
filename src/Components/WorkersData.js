import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Worker from './Subcomponents/Worker';

const WorkersData = () => {
    return(
        <div className="container">
            <h1>Podaci o svim szaposlenima</h1>
            <div className='workersList'>
                <Worker />
            </div>
            <div className='buttons'>
                <Stack spacing={2} direction="row">            
                    <Button variant="outlined">Clear</Button>
                    <Button type='submit' variant="contained">Load all</Button>
                </Stack>    
            </div>
        </div>
    );
}

export default WorkersData;