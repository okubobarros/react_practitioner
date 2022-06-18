import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

export default function cards(data) {
    return (
        <Grid container columnSpacing={6}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"

                        image={data.data.image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {data.data.name}
                        </Typography>

                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );

}