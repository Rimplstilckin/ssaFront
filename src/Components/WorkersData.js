import React from "react";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const WorkersData = () => {
    return(
        <div className="container">
            <h1>Podaci o svim szaposlenima</h1>
            <Stack spacing={2} direction="row">            
                <Button variant="outlined">Clear</Button>
                <Button type='submit' variant="contained">Load all</Button>
            </Stack>    
        </div>
    );
}

export default WorkersData;