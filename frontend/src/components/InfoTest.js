import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, IconButton } from "@material-ui/core";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

const pages = {
    JOIN: "pages.join",
    CREATE: "pages.create",
};

export default function InfoTest(props) {
    const [page, setPage] = useState(pages.JOIN);

    function joinInfo() {
        return "This app lets you control songs without asking for my phone.";
    }

    function createPage() {
        return "I made it for parties and stuff.";
    }

    useEffect(() => {
        console.log("ran");
        return () => console.log("cleanup")
    });

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">
                    App info
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <Typography variant="body1">
                    { page === pages.JOIN ? joinInfo() : createPage()}
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <IconButton onClick={() => {
                    page===pages.CREATE ? setPage(pages.JOIN) : setPage(pages.CREATE);
                }}
                >
                    {page===pages.CREATE ? (<NavigateBeforeIcon/>) : (<NavigateNextIcon/>)}
                </IconButton>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="secondary" variant="contained" to="/" component={Link}>
                    Back
                </Button>
            </Grid>
        </Grid>
    );
}