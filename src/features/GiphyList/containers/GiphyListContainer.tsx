import GiphyList from "../components/GiphyList";
import SearchForm from "../../../components/common/SearchForm";
import { Paper } from "@mui/material";
import { useState } from "react";
import Loader from "../../../components/common/Loader";
import useFetch from "./hooks";
import Message from "../../../components/common/Message";
import GiphyModalContainer from "../../GiphyModal/containers/GiphyModalContainer";
import { GIFCardDetailsType } from "../../../types/types";
/**
 * Giphy Listing container
 * Use this file to define all the logic required in Giphy search/listing feature
 * 
 * @returns void
 */
export default function GiphyListingContainer() {

    const [searchTerm, setSearchTerm] = useState<string | null>(null) // search query a user types in
    const [selectedGIF, setSelectedGIF] = useState<GIFCardDetailsType | null>(null) // selected GIF a user want to preview
    const [page, setPage] = useState<number>(1) // current page 

    const [loading, data, error] = useFetch(searchTerm, page) // custom hook to get GIF's from Giphy API

    //Increment page by 1, useFetch is listening to the var page.
    function loadMore() {
        setPage(page + 1)
    }

    // get the value from search form, set the search term, useFetch will fetch api results post that.
    function onFormSubmit(term: string) {
        setSearchTerm(term)
        setPage(1)
    }

    /**
     * Method to render content of Listing, it displays a loading/no records/ listing depending on current state
     * 
     * @returns void
     */
    const renderContent = () => {
        if (loading) return <Loader message="Loading GIFs" />
        if (!searchTerm) return <Message text="Please Search a GIF" />
        if (!loading && !error && !data) return <Message text="No Matching results" />

        return (<GiphyList items={data.items} pagination={data.pagination} setSelectedGIF={setSelectedGIF} loadMore={loadMore} />)
    }

    return (
        <>
            <Paper sx={{ display: 'inline' }}>
                <SearchForm onFormSubmit={onFormSubmit}></SearchForm>
            </Paper>
            {renderContent()}
            <GiphyModalContainer gifDetails={selectedGIF}/>
        </>
    )
}