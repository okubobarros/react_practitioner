import { Grid, Button } from '@mui/material'
import { useEffect, useState } from 'react'

//   Essa é a base do useState, a syntaxe será essa always - 
// o que pode mudar estará dentro do que vc espera dentro do parametro, no caso abaixo uma String
// para ilustrar o exemplo, mas poderia ser uma string vazia, uma array []...
export default function Banner() {

    const [text, setText] = useState('');
    // ***********outro useState******************

    const [color, setColor] = useState('black' || colors)
    const colors = ['blue', 'green']
    // nao estamos usando mas, para vc ver que conforme a necessidade de mudar o estado vc cria um novo useState, tentar dividir a aplicação visualmente
    const [number, setNumber] = useState();

    // os eventos que são acionados, passamos uma arrow func para simplificar, no caso não ha necessidade de return ou {}
    const changeColor = (e) => {
        e.preventDefault();
        setColor(colors[Math.floor(Math.random() * colors.length)])
        console.log('clicou');
    }

    const clickHandler = () => setText('');

    const inputField = (e) => {
        setText(e.target.value)
    }

    // podemos escrever assim tb, não ha certo ou errado
    // function goBack() {
    //     setText("hi")
    // }

    return (
        <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            flexDirection={'column'}
            sx={{ minHeight: '50VH', bgcolor: color }}>
            <Grid item sx={{ color: '#fff', margin: 'auto' }}>

                <p>React Hooks, useState, bem simplificado para compreensão!</p>
                <h1>React useState, write anything: {text || 'change me'}</h1>
                <p>Digite um texto</p>
                <input type='text' onChange={inputField} value={text} />

            </Grid>

            <Grid container justifyContent={'center'} gap={3} >
                <Grid item >
                    <Button variant={'contained'} onClick={changeColor} >
                        Change
                    </Button>
                </Grid>
                <Grid>
                    <Button variant={'contained'} onClick={clickHandler} >
                        Reset Input
                    </Button>
                </Grid>
            </Grid>
        </Grid >
    )
}