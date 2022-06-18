import { Grid, Button } from '@mui/material'
import { useEffect, useState } from 'react'

//   Essa é a base do useState, a syntaxe será essa always - 
// o que pode mudar estará dentro do que vc espera dentro do parametro, no caso abaixo uma String
// para ilustrar o exemplo, mas poderia ser uma string vazia, uma array []...
export default function Banner() {

    const [text, setText] = useState('');
    // ***********outro useState******************
    // const colors = ['blue', 'green'];

    const [color, setColor] = useState(false)
    // nao estamos usando mas, para vc ver que conforme a necessidade de mudar o estado vc cria um novo useState, tentar dividir a aplicação visualmente
    const [number, setNumber] = useState();

    const changeColor = () => {
        setColor(current => !current)
        console.log('clicou')
    };

    const clickHandler = () => setText('');

    const inputField = (e) => setText(e.target.value)


    return (
        <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            flexDirection={'column'}
            sx={{ minHeight: '50VH', bgcolor: color ? '#f67' : '#876' }}>
            {/* acima dentro dp SX dentro do JSX vc não usa If and else mas sim ternário */}

            <Grid item sx={{ color: '#fff', margin: 'auto' }}>

                <p>React Hooks, useState, bem simplificado para compreensão!</p>
                <h1>React useState, write anything: {text || 'change me'}</h1>
                <p>Digite um texto</p>
                <input type='text' onChange={inputField} value={text} />

            </Grid>

            <Grid container justifyContent={'center'} gap={3} >
                <Grid item >
                    <Button variant={'contained'} onClick={changeColor} >
                        Change bgColor
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