import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

export default function cards(data) {
    return (
        <Grid container columnSpacing={6}>
            <Grid item mt={3}>
                <Card sx={{ maxWidth: '40 %', borderRadius: '8px', border: '2px solid blue', boxShadow: '1px 3px 9px red', padding: '5px' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={data.data.image}
                            alt="rick and morty test"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {data.data.name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    );

}