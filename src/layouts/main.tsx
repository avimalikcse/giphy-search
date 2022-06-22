import React, { ReactNode, FC } from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchForm from "../components/common/SearchForm";

const theme = createTheme();

/**
 * Main Layout file for the Application.
 * Use this place to manage the layout
 * 
 * @param {children} object from react props 
 */

// define interface to represent component props
interface Props {
    children: ReactNode;
}

const Main: FC<Props> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <AppBar sx={{alignItems:'center'}}>
                
                <Toolbar >
                    <Typography> Giphy Search</Typography>
                </Toolbar>
            </AppBar>
            <main data-testid="main-layout-testId">
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: "background.paper",
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container>{children}</Container>
                </Box>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    All rights Reserved
                </Typography>
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}

export default Main;