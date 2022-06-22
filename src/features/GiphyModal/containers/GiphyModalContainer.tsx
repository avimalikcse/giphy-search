import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { GIFCardDetailsType } from '../../../types/types';


/**
 * Component to display GIF in a modal with animation
 * A popup will Open as soon as someone selects a GIF from listing page
 * 
 */
type GiphyCardModalProps = {
    gifDetails: GIFCardDetailsType | null
}

export default function GiphyModalContainer({ gifDetails }: GiphyCardModalProps) {

    const [open, setOpen] = React.useState<boolean>(false);

    //@ToDo. move to a css file
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: gifDetails?.width,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    React.useEffect(() => {
        if (gifDetails) {
            setOpen(true)
        }
    }, [gifDetails]) // open display Popup if someone select a GIF

    return (
        <Modal open={open}
            onClose={() => setOpen(false)}>
            <Box sx={style}>
                {gifDetails && <img src={gifDetails.gifURL}></img>}
            </Box>
        </Modal>
    )
}