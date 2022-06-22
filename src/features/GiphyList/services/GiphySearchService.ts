import { SearchType } from "../../../types/types";
import APIService from "./APIService";

/**
 * Service to manage Giphy data intersection 
 * 
 */
class GiphySearchService {
    private apiKey: string = 'tVaJe9QRTL6VZp9xhBkogbNWFTI9hYnJ'
    rating: string = 'G';
    lang: string = 'en';

    
    search(query: SearchType['query'], limit: SearchType['limit'], offset: SearchType['offset']) {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=${limit}&offset=${offset}&rating=${this.rating}&lang=${this.lang}`
        return APIService.get(url)
    }
}

export default GiphySearchService