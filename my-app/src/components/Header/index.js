import { Grid, Button } from '@mui/material'
import { useEffect, useState } from 'react'


export default function Banner() {

    // Destructuring Es6, essa é a base do useState, a syntaxe será essa always - o que pode mudar estará dentro do que vc espera dentro do parametro, no caso abaixo uma String
    // para ilustrar o exemplo, mas poderia ser uma string vazia, uma array []...
    const [text, setText] = useState('I am here');

    // os eventos que são acionados, passamos uma arrow func para simplificar, no caso não ha necessidade de return ou {}
    const clickHandler = () => setText('I am gone!!!');
    const goBack = () => setText('Here I am');


    // Esse hook para um segundo momento
    useEffect(() => {
    }, [])


    return (
        <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            sx={{ minHeight: '50VH', bgcolor: '#238' }}>
            <Grid item sx={{ color: '#fff' }}>
                <p>React Hooks, useState, bem simplificado para compreensão!</p>
                <h1>where are you? {text}</h1>
                {/* onClick = evebto padrao para o react é uma funcao para chamar no click mesmo */}
                <Button onClick={clickHandler} text={'#FFF'} variant={'contained'} >
                    change
                </Button>
                <Button variant={'outlined'} onClick={goBack}>
                    Return
                </Button>
            </Grid>
        </Grid>
    )
}