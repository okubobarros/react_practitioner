import { Grid, Typography, typography } from '@mui/material'


export default function About() {
    return (
        <Grid container justifyContent={'center'} alignItems={'center'}
            sx={{ marginTop: '4rem' }}>
            <Grid item textAlign={'center'}>
                <Typography variant='h3'>
                    Sobre a DaleShip
                </Typography>
                <Typography variant='h5'>
                    All in one
                </Typography>
            </Grid>
            <Grid>
                <p>DaleShip foi lançada em 2019 e é uma plataforma digital que permite aos clientes transportar cargas em todo o mundo em poucos passos fáceis.</p>
                <hr />
                <h4> Usando uma combinação de tecnologia inovadora, dados e uma plataforma que abrange milhares de fornecedores globais de logística, importadores, companhias aéreas, marítimas, transportadoras, a DaleShip está facilitando o comércio global.

                    É assim que DaleShip surge para fornecer uma plataforma de soluções para o comercío internacional brasileiro, com soluções digitais de ponta a ponta.</h4>
                <hr />
                <h2>Smart Delivery</h2>
                <h4>Estamos possibilitando um comércio mais inteligente por meio de tecnologias digitais. DaleShip oferece uma ampla gama de opções de entrega - desde o transporte de contêineres e consolidação de carga até grandes carregamentos. Oferecemos taxas de frete dos principais fornecedores de logística do mundo, linhas de transporte e outros fornecedores para destinos em todo o mundo.</h4>
                <hr />
                <h2>Transformação Digital da Logística Internacional Brasileira</h2>
                <h4>Para atingir um público maior com serviços de logística terrestre e aérea, trabalhamos com soluções de serviços aéreo e marítimo, onde podem ser encontradas soluções especializadas.</h4>
                <hr />
                <h3>Tem dúvidas sobre DaleShip?</h3>
                <p>Entre em contado!</p>
            </Grid>
        </Grid >
    )
}