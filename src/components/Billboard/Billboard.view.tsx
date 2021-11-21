import React, {memo} from "react";
import {useBillboardContext} from "./billboard.context";
import {Box, Button, ButtonGroup, Container, Typography} from "@mui/material";

function BillboardView() : React.ReactElement {
    const { state, updateRandomQuote, saveFavoriteQuote } = useBillboardContext();
    return(
        <Container>
            <Box p={3} mt={2} mb={2}>
                <Typography variant={"h2"}>{state.title}</Typography>
                <Typography variant={"h4"}>A {state.caption} quotation </Typography>
                <Typography variant={"h5"}>{state.content}</Typography>
                <ButtonGroup>
                    <Button
                        variant={"contained"}
                        color={"primary"}
                        onClick={updateRandomQuote}>New quote</Button>
                    <Button
                        variant={"contained"}
                        color={"secondary"}
                        onClick={saveFavoriteQuote}>I like this quote!</Button>
                </ButtonGroup>
            </Box>
        </Container>
    );
}

export default memo(BillboardView)