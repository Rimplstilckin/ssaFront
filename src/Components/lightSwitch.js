import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

const LightSwitch = (props) => {
  return (
    <Card className='lightSwitch' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Test light switch
        </Typography>
        <Switch checked={props.light} />
      </CardContent>
    </Card>
  );
}

export default LightSwitch;