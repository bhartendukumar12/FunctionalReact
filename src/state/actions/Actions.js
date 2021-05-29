
/**
 * Trigger workflow to delete thirdParty integration
 * based on provided id.
 */
export const fetchUsers = () => {
    return { type: 'REQUEST_USERS' };
};

export const fetchUser = (user) => {
    return { type: 'REQUEST_USER', data: user };
};
