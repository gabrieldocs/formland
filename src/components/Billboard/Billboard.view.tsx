import React, {memo} from "react";
import {useBillboardContext} from "./billboard.context";
import {Box, Button, ButtonGroup, Container, Snackbar, Typography} from "@mui/material";

function BillboardView() : React.ReactElement {
    const { state, updateRandomQuote, saveFavoriteQuote, deleteFavoriteQuote } = useBillboardContext();
    return(
        <Container
            style={{
                backgroundColor: "black"
            }}>
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                style={{
                    color: "white",
                    height: "100vh"
                }}>
                <Typography variant={"h2"}>{state.title}</Typography>
                <Typography variant={"h4"}>A {state.caption} quotation </Typography>
                <Typography variant={"h5"}>{state.content}</Typography>
                <br />
                <br />
                <ButtonGroup>
                    <Button
                        variant={"outlined"}
                        color={"primary"}
                        onClick={updateRandomQuote}>New quote</Button>
                    <Button
                        variant={"outlined"}
                        color={"secondary"}
                        onClick={saveFavoriteQuote}>I like this quote!</Button>
                    <Button
                        variant={"outlined"}
                        color={"secondary"}
                        onClick={deleteFavoriteQuote}>I don't like this quote!</Button>
                </ButtonGroup>
            </Box>
            <Snackbar
                open={true}
                autoHideDuration={6000}
                onClose={()=>{console.log("Bye")}}
                message="Note archived"
                action={()=>{}}
            />
        </Container>
    );
}

export default memo(BillboardView)