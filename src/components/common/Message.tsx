import { Typography } from "@mui/material";

const Message: React.FC<{ text: string }> = ({ text }) => {
    return (
        <Typography component="div" sx={{ textAlign: 'center', mt: '10%' }} gutterBottom>{text}</Typography>
    )
}
export default Message