import React from 'react'
import { Button, ThemeProvider, createTheme } from '@mui/material'
import { useTheme } from '@emotion/react';

/**
 * #### If You Use Variant Contained Button You Can Add Gradient Color.
 * - eg. 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
 * 
 * ###  If You Use Variant Text And Outlined Button You Can Add Color this way .
 * 
 * - eg. color={useTheme().palette.primary.main} or if you want to add other color you can add  color={'red'}
 *
 *
 */

const Cus_Button = ({ children, variant, color, ...rest }) => {

    const Button_Theme = createTheme({
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        fontSize: 13,
                        fontWeight: 400,
                        ...(variant === 'text' && {
                            textTransform: 'none',
                            color: color ? color : useTheme().palette.primary.main,
                        }),
                        ...(variant === 'outlined' && {
                            color: '#000000',
                            background: 'none',
                            border: `2px solid ${color ? color : useTheme().palette.primary.main}`,
                            padding: '6px 14px',
                        }),
                        ...(variant === 'contained' && {
                            background: color
                                ? color
                                : `linear-gradient(45deg, #0489F6 30%, #4144FF 90%)`,
                            color: '#ffffff',
                            '&:hover': {
                                backgroundColor: color,
                                opacity: 0.8
                            }
                        }),
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={Button_Theme}>
            <Button {...rest}>{children}</Button>
        </ThemeProvider>
    )
}

export default Cus_Button