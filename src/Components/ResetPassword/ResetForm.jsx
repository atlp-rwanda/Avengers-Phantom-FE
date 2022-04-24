import React, { useState } from 'react';
import { Button, Typography, Container, Box, TextField } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Send } from '@mui/icons-material';
import SkeletonElement from '../../skeleton/SkeletonElement.js';
import SkeletonArticle from '../../skeleton/SkeletonArticle.js';


export default function ResetForm() {

    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setTitleError(false)
        setDetailsError(false)

        if (title === "") {
            setTitleError(true)
        }
        if (details === "") {
            setDetailsError(true)
        }
        if (title && details) {
            console.log(title, details)
        }
    }


    return (

        <Box m={4} p={0} backgroundColor={"#fefefe"} border={["#000", "solid", 2]}>
            <Container  >

                <Box my={2} textAlign={"center"}>
                    <Typography>
                        Do you want to reset your Password?
                    </Typography>

                    <SkeletonArticle />

                </Box>

                <form
                    noValidate
                    autoComplete='off'
                    onSubmit={handleSubmit}
                >
                    <Box mt={2}>
                        <Typography>
                            Enter your email address
                        </Typography>
                    </Box>
                    <Box my={3} >
                        <TextField style={{ width: '100%' }}

                            onChange={(e) => setTitle(e.target.value)}
                            required
                            label="Please enter your registerd email"
                            variant="outlined"
                            // className={classes.field}
                            error={titleError}
                        />
                    </Box>
                    <Box py={{ sm: 2.5, xm: 4 }}>
                        <Button
                            type="submit"
                            // className={classes.btn}
                            color="primary"
                            variant='outlined'
                            startIcon={<Send />}
                            endIcon={<KeyboardDoubleArrowRightIcon />}>
                            Submit
                        </Button>

                    </Box>

                </form>
            </Container>
        </Box>
    )
}
