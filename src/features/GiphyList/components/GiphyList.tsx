import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import GridList from "../../../components/common/GridList";
import { GIFCardDetailsType, PaginationDataType } from "../../../types/types";
import GiphyCard from "./GiphyCard";


type GiphyListProps = {
    items: Array<any>;
    pagination: PaginationDataType;
    loadMore: Function;
    setSelectedGIF: Function;
}

export default function GiphyList({ items, pagination, loadMore, setSelectedGIF }: GiphyListProps) {

    const [colWidth, setColWidth] = useState(4)
    const gifCards = items.map(rawData => {
        return (
            {
                id: rawData.id,
                title: rawData.title,
                thumbnail: rawData.images.original_still.url,
                width: rawData.images.original_still.width,
                height: rawData.images.original_still.height,
                gifURL: rawData.images.downsized.url,


            }
        )
    })
    return (
        <>
            <GridList colWidth={colWidth}>
                {gifCards.map(gif => {
                    return (
                        <GiphyCard cardDetails={gif} key={gif.id} setSelectedGIF={setSelectedGIF} />
                    )
                })}

            </GridList>
            {pagination.offset < pagination.total_count && <Box display='grid'>
                <Button onClick={(e) => loadMore()} sx={{ textAlign: 'center' }}>Next Page</Button></Box>}


        </>
    )
}