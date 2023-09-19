// Component
import { TextField } from "@mui/material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// css
import '../css/inputForm.css';

const InputFields = (props) => {

    // const [value, setValue] = useState(props.value);

    // const clickHanler = () => {
    //     setValue('')
    // }

    return (
        <div className="container">
            <h1>Unos podataka o zaposlenom</h1>
            <form method="Post" action="backendHanler.php">
                <div className='form'>

                    <div className="inputField idBroj">
                        <TextField
                            required
                            label='ID zaposlenog'
                            variant='standard'                            
                            type="number"
                            name='idBroj'
                        />
                    </div>

                    <div className="inputField firstName">
                        <TextField
                            required
                            label='Ime'
                            variant='standard'
                            name='firstName'
                        />
                    </div>

                    <div className="inputField lastName">
                        <TextField
                            required
                            label='Prezime'
                            variant='standard'
                            name='lastName'
                        />
                    </div>
                    
                    <div className="inputField born">
                        <label className="datelabel" htmlFor='date'>Datum rođenja</label>
                        <br />
                        <TextField
                            required
                            id='date'
                            variant='standard'
                            type="date"
                            name='born'
                        />
                    </div>

                    <div className="inputField brTel">
                        <TextField
                            label='Broj telefona'
                            variant='standard'
                            name='phone'
                        />
                    </div>

                    <div className="inputField experience">
                        <TextField
                            required
                            label='Godine iskustva'
                            variant='standard'
                            name='experience'
                        />
                    </div>

                    <div className="inputField position">
                        <TextField
                            required
                            label='Radno mesto'
                            variant='standard'
                            name='position'
                        />
                    </div>

                    <div className="inputField education">
                        <TextField
                            required
                            label='Stručna sprema'
                            variant='standard'
                            name='education'
                        />
                    </div>

                    <div className="inputField note">
                        <TextField
                            label='Napomena'
                            variant='standard'                            
                            multiline
                            maxRows={4}
                            name='note'
                        />
                    </div>

                    <div className="buttons">
                        <Stack spacing={2} direction="row">
                            <Button variant="outlined">Cancel</Button>
                            <Button type='submit' variant="contained">Submit</Button>
                        </Stack>
                    </div>


                </div>

            </form> 
        </div>
    );
}

export default InputFields;