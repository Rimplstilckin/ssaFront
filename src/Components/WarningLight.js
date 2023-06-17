import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const WarningLight = (props) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
        {
        props.polution <= 2000 ? 
            <Alert className="warning" severity="success">Vazduh je dobrog kvaliteta</Alert>
            :
            props.polution > 2000 && props.polution < 4600 ?
                <Alert className="warning" severity="warning">Kvaliteta vazduha je prihvatljiv</Alert>
                :
                <Alert className="warning" severity="error">Vazduh u prostoriji je štetan po zdravlje!</Alert>
        }
    </Stack>
  );
}

export default WarningLight;