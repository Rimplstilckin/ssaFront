import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const DataDisplay = (props) => {
  return (
    <Card className='dataCard' raised sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.text}: {props.temp}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default DataDisplay;