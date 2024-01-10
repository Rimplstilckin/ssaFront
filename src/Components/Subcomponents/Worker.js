import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Worker = (props) => {
    return(
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    ID: {props.worker.PersonID}
                </Typography>

                <Typography>
                    Ime: {props.worker.FirstName}
                </Typography>

                <Typography>
                    Prezime: {props.worker.LastName}
                </Typography>
                
                <Typography>
                    Datum rođenja: {props.worker.Born}
                </Typography>
                
                <Typography>
                    Broj telefona: {props.worker.Phone}
                </Typography>
                
                <Typography>
                    Godine iskustva: {props.worker.Experience}
                </Typography>
                
                <Typography>
                    Radno mesto: {props.worker.Position}
                </Typography>
                
                <Typography>
                    Stručna sprema: {props.worker.Education}
                </Typography>   

                <Typography>
                    Napomena: {props.worker.Note}
                </Typography>                
            </CardContent>
        </Card>
    )
}

export default Worker;