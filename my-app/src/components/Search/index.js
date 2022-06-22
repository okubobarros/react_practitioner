import { Grid, TextField, Button } from '@mui/material';


// ISSO AQUI É BASICO DE JSON, ESSE E.preventDefault É PARA LIMPAR A PESQUISA 
const Search = ({ setSearch, updatePageNumber }) => {
    let searchBtn = (e) => {
        e.preventDefault();
    };

    return (
        <Grid container flexDirection={'row'} justifyContent={'center'} padding={2}>
            <Grid item >
                <TextField size="small"
                    label="Find caracter"
                    variant="outlined"
                    onChange={(e) => {
                        updatePageNumber(1);
                        setSearch(e.target.value);
                    }} />
                <Button
                    variant={'contained'}
                    onClick={searchBtn}>
                    Search
                </Button>
            </Grid>
        </Grid >
    );
};


export default Search;
