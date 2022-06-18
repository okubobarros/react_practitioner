import { Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
// this is the main folder on the starter Project, react today creates a functional components
// meaing you wont see anymore class base component for legacy code is good to understand that way of doing react.
import Cards from '../components/Cards/index.js'
export default function Home() {
    const api = ('https://rickandmortyapi.com/api/character');

    const [caracter, setCaracter] = useState('');


    useEffect(() => {
        fetch(api)
            .then((res) => res.json())
            .then((data) => setCaracter(data));
    }, [api])

    const { results = [] } = caracter;
    // console.log(results);
    return (
        <Grid container alignItems={'center'} justifyContent={'center'} sx={{ bgcolor: 'green', padding: '3rem' }}>

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
                        <Cards data={result} />
                    </Grid>
                );
            })}
        </Grid>
    )
}