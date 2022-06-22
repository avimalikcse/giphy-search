import { useState, useEffect } from "react";
import { SearchType } from "../../../types/types";
import GiphySearchService from "../services/GiphySearchService";


const LIMIT = 12;

const GiphySearch = new GiphySearchService()
/**
 * Custom hook to get the Giphy data from API
 * useEffect has a dependency of searchTerm and page, which will get from container 
 * 
 * @param {string} query search Query
 * @param {number} limit limit of search results
 * @param {number} offset starting offset of search results
 * 
 * @returns {Array} details of Loading,data or any error 
 */



function useFetch(query: SearchType["query"], page: number): [Boolean, any, any] {

    const [loading, setLoading] = useState<Boolean>(false);
    const [error, setError] = useState<any>(null);
    let [data, setData] = useState<any>({ items: [], pagination: {} });

    useEffect(() => {
        async function search() {
            const offset = page === 1 ? 0 : (page - 1) * LIMIT
            return await GiphySearch.search(query, LIMIT, offset)
        }

        try {
            if (query) {
                setLoading(true)
                search().then(apiResponse => {
                    let { data: apiData, pagination } = apiResponse
                    let items = apiData;
                    setData({ items, pagination });
                    setLoading(false)
                });
            }

        } catch (e) {
            setLoading(false)
            setError(e)
        }

    }, [query, page]);

    return [loading, data, error];
};

export default useFetch;