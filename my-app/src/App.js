import { Grid, Typography } from '@mui/material';

// this is the main folder on the starter Project, react today creates a functional components
// meaing you wont see anymore class base component for legacy code is good to understand that way of doing react.

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <p>
    //       the project starts here
    //     </p>
    //     {/* <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a> */}
    //   </header>
    // </div>
    <Grid
      container
      direction='row'
      justifyContent='center'
      alignItems='center'
      sx={{ minHeight: '50VH', bgcolor: '#009688' }}>
      <Grid item sx={{ color: '#fff' }}>
        <Typography variant='h2' fontSize='bold'>
          The project starts here!
        </Typography>
      </Grid>
    </Grid>
  );
}

export default App;
