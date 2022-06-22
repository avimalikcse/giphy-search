
import { CircularProgress, Paper, Typography, Box } from "@mui/material";

type LoaderProps= {
    message?: string;
};
export default function Loader({ message }: LoaderProps) {
    return (
        <Box sx={{ display: 'flex', mt:"10%" }} justifyContent='center'>
            {message ? message :  "Loading Results"}  <CircularProgress />
        </Box>
    )
}