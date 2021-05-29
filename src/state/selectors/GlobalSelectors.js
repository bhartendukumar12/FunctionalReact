import SelectorHelper from '../../utils/SelectorHelper';
import GlobalHelper from '../../utils/GlobalHelper';


const users = (state) => state.global?.users;
const userRecord = (state) => state.global?.userRecord;

/**
 * Get Api Data
 */
export const getData = SelectorHelper.createCustomSelector(
    [users],
    (users) => {
        if (users && Array.isArray(users)) {
            return GlobalHelper.deepClone(users);
        } else {
            return [];
        }
    }
);

/**
 * Get Api Data
 */
 export const getUserRecord = SelectorHelper.createCustomSelector(
    [userRecord],
    (userRecord) => {
        if (userRecord) {
            return GlobalHelper.deepClone(userRecord);
        } else {
            return {};
        }
    }
);