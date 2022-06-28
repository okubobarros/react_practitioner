import { FormControl, Grid, Button, TextField } from '@mui/material';
import { useState } from 'react';

const defaultValues = {
    name: '',
    company: ''
};

const Offer = () => {
    const [formData, setFormData] = useState(defaultValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    };

    const formSubmission = event => {
        event.preventDefault();
        setFormData(defaultValues);
        console.log(formData);
    };

    return (
        <form onSubmit={formSubmission}>
            <Grid container justifyContent={'center'} margin={'15px'} sx={{ flexDirection: 'row', backgroundColor: '#79828D' }}>
                <Grid item sx={{ backgroundColor: 'solid 1px black' }} >
                    <FormControl sx={{ padding: '5rem', flexDirection: 'row', gap: 1 }}>
                        <TextField
                            id="name-input"
                            name="name"
                            label="Name"

                            type=""
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <TextField

                            id="company-input"
                            name="company"
                            label="company"

                            type=""
                            value={formData.company}
                            onChange={handleInputChange}
                        />
                        <Grid item >
                            <Button type='submit' variant={'contained'}>
                                Submit
                            </Button>
                        </Grid>

                    </FormControl>
                </Grid>
                <Grid item xs={12} textAlign='center'>
                    <h4>Nome:{formData.name},  Empresa:{formData.company}</h4>
                </Grid>
            </Grid >
        </form >
    )
}

export default Offer;