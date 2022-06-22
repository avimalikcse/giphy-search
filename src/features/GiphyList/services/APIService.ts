/**
 * Class to manage all API calls
 * Use this place to manage all sugar-coating of APIS such a Authorization, Exception handling etc
 * 
 */
class APIService {

    async get(url: string) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
}
export default new APIService()