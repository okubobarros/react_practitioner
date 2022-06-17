import { Grid, Typography } from '@mui/material';

// this is the main folder on the starter Project, react today creates a functional components
// meaing you wont see anymore class base component for legacy code is good to understand that way of doing react.

export default function Home() {
    return (
        <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            sx={{ minHeight: '50VH', bgcolor: '#009688' }}>
            <Grid item sx={{ color: '#fff' }}>
                <Typography variant='h2' fontSize='bold'>
                    I am Home !!!
                </Typography>
            </Grid>
        </Grid>
    );
}