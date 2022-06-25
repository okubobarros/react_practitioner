
import { Button, Typography } from '@mui/material';
import ProductHeroLayout from '../../Layout/HeroLayout/index';

const backgroundImage =
    'https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80';

export default function BannerB() {
    return (
        <ProductHeroLayout
            sxBackground={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor: '#7fc7d9', // Average color of the background image.
                backgroundPosition: 'center',
            }}
        >

            {/* <img
                style={{ display: 'none' }}
                src={backgroundImage}
                alt="increase priority"
            /> */}
            <Typography color="inherit" align="center" variant="h2" marked="center">
                Welcome
            </Typography>
            <Typography
                color="inherit"
                align="center"
                variant="h5"
                sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
            >
                {/* We are DaleShip */}
            </Typography>
            <Button
                color="primary"
                variant="contained"
                size="large"
                component="a"
                href="/about"
                sx={{ minWidth: 200 }}
            >
                Register
            </Button>

        </ProductHeroLayout>
    );
}