import Link from '@mui/material/Link';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import '../css/navigation.css';

const Navigation = () => {
    return(
        <div className='navigation'>
            <Stack spacing={8} direction="row">            
                    <Link href='/'><Button variant="contained" >Novi unos</Button></Link>
                    <Link href='/seeall'><Button variant="contained">Svi zaposleni</Button></Link>
                    <Link href='/remove'><Button variant="contained">Brisanje</Button></Link>
            </Stack> 
        </div>
    );
}

export default Navigation;