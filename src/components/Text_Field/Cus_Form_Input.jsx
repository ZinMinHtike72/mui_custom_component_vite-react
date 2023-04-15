
import React from 'react';
import { InputLabel, TextField, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
const inputTheme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-input': {
                        padding: '7px 10px',
                        border: `${blueGrey[200]} solid 2px`,
                        borderRadius: '8px',
                        mb: 0.5,
                    },
                    '& .MuiInputBase-input:focus': {
                        // custom styles for the input element when it is focused
                        border: "#35d1f5 solid 2px",
                        boxShadow: `0 0 1px 2px #81e3f9de`,
                        outline: 0,
                    },
                    '& .MuiInputLabel-root': {
                        // custom styles for the label element
                    },
                    '& .MuiInputLabel-shrink': {
                        // custom styles for the label element when it is shrunk
                    },
                    "& fieldset": { border: 'none' },
                },
            },
        },
    },

})

const Cus_Form_Input = ({ label, ...rest }) => {
    return (
        <ThemeProvider theme={inputTheme}>
            <InputLabel sx={{
                fontSize: 14.5,
                mb: 0.5
            }}>{label}</InputLabel>
            <TextField
                {...rest}
            />
        </ThemeProvider>
    )
}

export default Cus_Form_Input