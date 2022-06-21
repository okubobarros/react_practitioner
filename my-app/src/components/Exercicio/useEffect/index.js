import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
// this is the main folder on the starter Project, react today creates a functional components
// meaing you wont see anymore class base component for legacy code is good to understand that way of doing react.
import Cards from '../../Cards/index'
export default function Exercicio1() {

    const api = ('https://rickandmortyapi.com/api/character');
    const [caracter, setCaracter] = useState('');

    // **********esse hook lida com o efeito colateral, o que antes era o mount, didMount, UnMount do lifecicle
    useEffect(() => {
        fetch(api)
            .then((res) => res.json())
            .then((data) => setCaracter(data));


    }, [])
    const { results = [] } = caracter;
    console.log(results);
    return (
        <Grid container alignItems={'center'} justifyContent={'center'} sx={{ bgcolor: '#000', padding: '3rem' }}>

            {results.map((result, id) => {
                return (
                    <Grid item
                        spacing={3}
                        key={id}
                        style={{
                            display: 'grid',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'solid blue  1px'
                        }}
                    >
                        {/* *********estou importando um component que passa a ser */}
                        <Cards data={result} />
                    </Grid>
                );
            })}
        </Grid>
    )
}