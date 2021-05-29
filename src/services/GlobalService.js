
/**
 * Utility having all API calls at app level
 */
const GlobalService = {

    fetchUsers: async (url) => {
        const response = await fetch(url);
        return await response.json();;
    }

};

export default GlobalService;
