
const globalReducer = (state = {}, { type, data }) => {
    switch (type) {
        case 'USERS_RECEIVE':
            return {
                users: data
            }
        case 'USER_RECEIVE':
            return {
                ...state,
                userRecord: data
            }
        default:
            return state;
    }
};

export default globalReducer
