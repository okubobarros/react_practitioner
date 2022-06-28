import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                2002 @DaleShip 🇧🇷. All rights reserved 🌎
            </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function StickyFooter() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '10vh',
            }}
        >
            <CssBaseline />
            {/* <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
                <Typography variant="h2" component="h1" gutterBottom>
                    Sticky footer
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {'Pin a footer to the bottom of the viewport.'}
                    {'The footer will move as the main element of the page grows.'}
                </Typography>
                <Typography variant="body1">Sticky footer placeholder.</Typography>
            </Container> */}
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[200]
                            : theme.palette.grey[800],
                }}
            >
                <Container maxWidth="sm">
                    <div className="footer-col">
                        <Typography variant="body1">
                            DaleShip é a maneira mais fácil para as pessoas enviarem suas mercadorias para o exterior ou oferecer espaço livre no contêiner, caminhão ou navio para milhões de expedidores.
                        </Typography>
                    </div>
                    <div className="footer-col">
                        <Typography variant="body1">
                            Deixe seu e-mail para obter nossa lista de atualização de tecnologia de logística. <br />
                            Nós nunca enviaremos spam e você sempre pode cancelar a inscrição facilmente.
                        </Typography>
                    </div>
                    <Copyright />
                </Container>
            </Box>
        </Box>
    );
}