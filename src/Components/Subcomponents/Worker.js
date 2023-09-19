import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Worker = () => {
    return(
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    ID: 
                </Typography>

                <Typography>
                    Ime: 
                </Typography>

                <Typography>
                    Prezime: 
                </Typography>
                
                <Typography>
                    Datum rođenja: 
                </Typography>
                
                <Typography>
                    Broj telefona: 
                </Typography>
                
                <Typography>
                    Godine iskustva: 
                </Typography>
                
                <Typography>
                    Radno mesto: 
                </Typography>
                
                <Typography>
                    Stručna sprema: 
                </Typography>                
            </CardContent>
        </Card>
    )
}

export default Worker;