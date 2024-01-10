// Component
import { TextField } from "@mui/material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import axios from 'axios';
import {useState} from "react";

// css
import '../css/inputForm.css';

const address = 'https://85r6g5q0uf.execute-api.eu-central-1.amazonaws.com/default/createWorker'

const addWorker = (worker) => {
    axios.post(address, {
        "firstName": worker.firstName,
        "lastName": worker.lastName,
        "born": worker.born,
        "phone": worker.phone,
        "position": worker.position,
        "education": worker.education,
        "experience": worker.experience,
        "note": worker.note
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

const InputFields = (props) => {

    const [firstName, setFirstName] = useState("");
    const changeFirstNameHandler = e => {
        setFirstName(e.target.value);
    }

    const [lastName, setLastName] = useState("");
    const changeLastNameHandler = e => {
        setLastName(e.target.value);
    }


    const [born, setBornDate] = useState("");
    const changeBornHandler = e => {
        setBornDate(e.target.value);
    }

    const [phone, setPhone] = useState("");
    const changePhoneHandler = e => {
        setPhone(e.target.value);
    }

    const [experience, setExperience] = useState("");
    const changeExperienceHandler = e => {
        setExperience(e.target.value);
    }
    
    const [position, setPosition] = useState("");
    const changePositionHandler = e => {
        setPosition(e.target.value);
    }
    
    const [education, setEducation] = useState("");
    const changeEducationHandler = e => {
        setEducation(e.target.value);
    }
    
    const [note, setNote] = useState("");
    const changeNoteHandler = e => {
        setNote(e.target.value);
    }

    const worker = {
        "firstName": firstName,
        "lastName": lastName,
        "born": born,
        "phone": phone,
        "position": position,
        "education": education,
        "experience": experience,
        "note": note
    }
    

    return (
        <div className="container">
            <h1>Unos podataka o zaposlenom</h1>
                <div className='form'>

                    <div className="inputField firstName">
                        <TextField
                            required
                            label='Ime'
                            variant='standard'
                            name='firstName'
                            value={firstName}
                            onChange={changeFirstNameHandler}
                        />
                    </div>

                    <div className="inputField lastName">
                        <TextField
                            required
                            label='Prezime'
                            variant='standard'
                            name='lastName'
                            value={lastName}
                            onChange={changeLastNameHandler}
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
                            value={born}
                            onChange={changeBornHandler}
                        />
                    </div>

                    <div className="inputField brTel">
                        <TextField
                            label='Broj telefona'
                            variant='standard'
                            name='phone'                            
                            value={phone}
                            onChange={changePhoneHandler}
                        />
                    </div>

                    <div className="inputField experience">
                        <TextField
                            required
                            label='Godine iskustva'
                            variant='standard'
                            name='experience'
                            value={experience}
                            onChange={changeExperienceHandler}
                        />
                    </div>

                    <div className="inputField position">
                        <TextField
                            required
                            label='Radno mesto'
                            variant='standard'
                            name='position'
                            value={position}
                            onChange={changePositionHandler}
                        />
                    </div>

                    <div className="inputField education">
                        <TextField
                            required
                            label='Stručna sprema'
                            variant='standard'
                            name='education'
                            value={education}
                            onChange={changeEducationHandler}
                        />
                    </div>

                    <div className="inputField note">
                        <TextField
                            label='Napomena'
                            variant='standard'                            
                            multiline
                            maxRows={4}
                            name='note'
                            value={note}
                            onChange={changeNoteHandler}
                        />
                    </div>

                    <div className="buttons">
                        <Stack spacing={2} direction="row">
                            <Button variant="outlined">Cancel</Button>
                            <Button variant="contained" onClick={() => addWorker(worker)}>Submit</Button>
                        </Stack>
                    </div>


                </div>
        </div>
    );
}

export default InputFields;