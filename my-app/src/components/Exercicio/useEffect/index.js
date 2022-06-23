import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
// this is the main folder on the starter Project, react today creates a functional components
// meaing you wont see anymore class base component for legacy code is good to understand that way of doing react.
import Cards from '../../Cards/index';
import Search from '../../Search/index';

export default function Exercicio1() {
    let [caracter, setCaracter] = useState('');
    let [search, setSearch] = useState('');
    let [pageNumber, updatePageNumber] = useState(1);

    const api = (`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`);
    // **********esse hook lida com o efeito colateral, o que antes era o mount, didMount, UnMount do lifecicle
    // useEffect(() => {
    //     fetch(api)
    //         .then((res) => res.json())
    //         .then((data) => setCaracter(data));
    // }, [])

    // ***************DOIS FETCHS UM SIMPLES E OUTRO USANDO ASYNC E AWAIT QUE É MAIS MODERNO***********************

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            setCaracter(data);
        })();
    }, [api]);

    // REPARA Q AQUI EU PASSO API DENTRO DOS BRACKETS E NO OUTRO NAO TINHA PASSADO MAS, SE FOSSE USAR AGORA PASSARIA E TEM UMA EXPLICAÇAO PRA ISSO


    // ABAIXO DESTRUCTURING
    const { results = [] } = caracter;
    // console.log(results);
    console.log(search);

    return (
        // se liga nos Grids é sempre um Grid Container, seguindo de um Item, isso é a boa pratica em MUI
        <Grid container alignItems={'center'} justifyContent={'center'}
            sx={{ bgcolor: '#FFF4', padding: '3rem' }}>
            <Grid item xs={12} align={'center'}>
                {/* Outro component importado tb receber instruções ou props e passa para o component filho */}
                <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
            </Grid>


            {/* Essa é a Unica maneira de fazer interações em react, a mais usada eu diria, LEMBRA DAS CHAVES, ABAIXO,
            ESTAMOS ENVOLVENDO O JSX NO JAVASCRIPT, ESTAMOS EM JAVASCRIPT LAND******/}
            {results.map((result, id) => {
                return (
                    <Grid item
                        spacing={3}
                        key={id}
                        style={{
                            display: 'grid',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 'auto'
                        }}
                    >
                        {/* *estou importando um component e passando dentro dele o resultado
                         da chamada de api e populando, PROPS ************/}
                        <Cards data={result} />
                    </Grid>
                );
            })}
        </Grid>
    )
}