import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GIFCardDetailsType, PaginationDataType } from "../../../types/types";




type GiphyCardProps = {
    cardDetails: GIFCardDetailsType,
    setSelectedGIF: Function
}

export default function GiphyCard({ cardDetails, setSelectedGIF }: GiphyCardProps) {

    const { title, thumbnail, gifURL, height, width } = cardDetails
    return (
        <Box textAlign={'center'}>
            <Card variant="outlined" onClick={() => setSelectedGIF(cardDetails)}> <CardContent>
                <img
                    width={width}
                    height={height}
                    src={thumbnail}
                    alt={title}
                />
                <Typography variant="body2">
                    {title}
                </Typography>
                <CardActions>
                    <Button size="small">Preview</Button>
                </CardActions>
            </CardContent>

            </Card>
        </Box>
    )
}

