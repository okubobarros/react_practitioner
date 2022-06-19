import { Grid, Typography, CardMedia } from '@mui/material'

export default function Banner() {
    return (
        <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            sx={{ minHeight: '50VH' }}>
            <Grid item sx={{ color: '#fff' }}>
                {/* <Typography variant='h2' fontSize='bold'>
                    Need improvement
                </Typography> */}
                <CardMedia
                    component="img"
                    // sx={{
                    //     height: 100,
                    //     width: 950,
                    //     maxHeight: { xs: 233, md: 167 },
                    //     maxWidth: { xs: 350, md: 250 },
                    // }}
                    src={'https://images.unsplash.com/photo-1638913658179-18c9a9c943f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
                />
            </Grid>
        </Grid>
    )
}