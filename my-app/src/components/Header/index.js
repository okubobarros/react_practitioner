import { Grid, Button } from '@mui/material'
import { useEffect, useState } from 'react'

export default function Banner() {
    //   Essa é a base do useState, a syntaxe será essa always - 
    // o que pode mudar estará dentro do que vc espera dentro do parametro, no caso abaixo uma String
    // para ilustrar o exemplo, mas poderia ser uma string vazia, uma array []...

    const [text, setText] = useState('');

    // nao estamos usando mas, para vc ver que conforme a necessidade de mudar o estado vc cria um novo useState, tentar dividir a aplicação visualmente
    const [number, setNumber] = useState();

    // os eventos que são acionados, passamos uma arrow func para simplificar, no caso não ha necessidade de return ou {}
    const clickHandler = () => setText('');


    // podemos escrever assim tb, não ha certo ou errado
    // function goBack() {
    //     setText("hi")
    // }

    // Esse hook para um segundo momento...sideeffects
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
                <h1>Test React State, write anything: {text || 'change me'}</h1>

                {/* onClick = evebto padrao para o react é uma funcao para chamar no click mesmo */}
                {/* <Button onClick={clickHandler} text={'#FFF'} variant={'contained'} >
                    change
                </Button> */}

                <Button variant={'contained'} onClick={clickHandler}>
                    go Back
                </Button>
                <input onChange={(e) => setText(e.target.value)}></input>
            </Grid>
        </Grid>
    )
}