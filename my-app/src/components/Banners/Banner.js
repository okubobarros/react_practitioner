import { Grid, Typography } from '@mui/material'

export default function Banner() {
    return (
        <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            sx={{ minHeight: '50VH', bgcolor: '#007683' }}>
            <Grid item sx={{ color: '#fff' }}>
                <Typography variant='h2' fontSize='bold'>
                    your banner!!!
                </Typography>
            </Grid>
        </Grid>
    )
}