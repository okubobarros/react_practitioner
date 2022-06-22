import { Grid, Button } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import { useState } from 'react'

//   Essa é a base do useState, a syntaxe será essa always - 
// o que pode mudar estará dentro do que vc espera dentro do parametro, no caso abaixo uma String
// para ilustrar o exemplo, mas poderia ser uma string vazia, uma array []...
export default function Exercicio2() {

    const [text, setText] = useState('');

    const [tarefas, setTarefas] = useState([
        'Praticar HTML5 e CSS3',
        'Aprender JavaScript',
        'Aprender ReactJS'
    ]);

    const [input, setInput] = useState("");

    function handleAdd() {
        setTarefas([...tarefas, input])
    }

    const [contador, setContador] = useState('0');

    const [color, setColor] = useState(false)
    // nao estamos usando mas, para vc ver que conforme a necessidade de mudar o estado vc cria um novo useState, tentar dividir a aplicação visualmente
    // const [number, setNumber] = useState();

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
            sx={{ minHeight: '45VH', bgcolor: color ? '#f67' : '#876' }}>
            {/* acima dentro dp SX dentro do JSX vc não usa If and else mas sim ternário */}

            <Grid item sx={{ color: '#fff', margin: 'auto' }}>

                <p>React Hooks, useState, bem simplificado para compreensão!</p>
                <h1>React useState, write anything: {text || 'change me'}</h1>
                <p>Digite um texto</p>
                <input type='text' onChange={inputField} value={text} />

            </Grid>
            <div>
                <ul>
                    {tarefas.map(tarefa => (
                        <li key={tarefa}>{tarefa}</li>
                    ))}
                </ul>

                <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                <button type="button" onClick={handleAdd}>Adicionar</button>

            </div>
            <Grid>

                <Grid>
                    <div>
                        <p>You clicked {contador} times</p>
                        <button onClick={() => setContador(contador + 1)}>
                            Aumentar
                        </button>
                    </div>
                </Grid>

            </Grid>

            <Grid container justifyContent={'center'} gap={3} >
                <Grid item >
                    <Button variant={'contained'} onClick={changeColor} startIcon={<SaveIcon />} >
                        Change bgColor
                    </Button>
                </Grid>
                <Grid>
                    <Button variant={'contained'} onClick={clickHandler} startIcon={<DeleteIcon />} >
                        Reset Input
                    </Button>
                </Grid>
                <Grid>
                    <Button href="www.google.com" variant={'outlined'} size="large" style={{ fontSize: 15 }}>
                        Outlined Button
                    </Button>
                </Grid>
            </Grid>
        </Grid >
    )
}