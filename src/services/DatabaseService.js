
/**
 * Common helper for local data storage needs.
 */
const DatabaseService = {

    /**
     *  Lists all known keys for data storage.
     */
    keys: {
        SESSION: 'session',
        STATE: 'state',
        DYNAMIC_CONFIG: 'dynamicConfig',
        REMOTE_CONSOLE_CONNECTION: 'remoteConsoleConnection',
        REFERRER: 'referrer'
    },

    /**
     * Confirms if local storage is available to use.
     */
    isLocalStorageAvailable() {
        let test = '_z_storage_test';
        try {
            localStorage.setItem(test, test);
            if (localStorage.getItem(test) === test) {
                localStorage.removeItem(test);
                return true;
            }
        } catch (e) {
            //
        }
        return false;
    },

    /**
     * Loads and returns saved `state`
     */
    loadState() {
        try {
            const serializedState = this.get(this.keys.STATE);
            if (!serializedState) {
                //No State exists. Reducer should initialize the application state.
                return undefined;
            }
            return JSON.parse(serializedState);
        } catch (error) {
            //Reducer should initialize the application state.
            return undefined;
        }
    },

    /**
     * Saves requested state to local data store.
     * @param {Object} state
     */
    saveState(state) {
        try {
            const serializedState = JSON.stringify(state);
            this.set(this.keys.STATE, serializedState);
        } catch (error) {
            //throw new Error('Error encountered while saving state: ' + error);
        }
    },

    /**
     * Helper method to fetch session token from storage
     */
    getSessionToken() {
        try {
            let session = this.get(this.keys.SESSION);
             if (session) {
                   const token = JSON.parse(session).token;
                if (token) {
                    return token.base64;
                }
            }
        } catch (error) {
            throw new Error('Error encountered while retrieving session token: ' + error);
        }
        return '';
    },

    /**
     * Helper method to fetch session from storage
     */
    getSession() {
        try {
            let session = this.get(this.keys.SESSION);
            if (typeof session === 'string') {
                return JSON.parse(session);
            } else {
                return session;
            }
        } catch (error) {
            throw new Error('Error encountered while retrieving session information: ' + error);
        }
    },

    /**
     * Loads and returns saved `dynamicConfig`
     */
    getDynamicConfig() {
        try {
            const serializedConfig = this.get(this.keys.DYNAMIC_CONFIG);
            if (serializedConfig === null) {
                return undefined;
            }
            return JSON.parse(serializedConfig);
        } catch (error) {
            return undefined;
        }
    },

    /**
     * Clears all cookies for current domain.
     */
    clearCookies() {
        if (navigator.cookieEnabled) {
            document.cookie.split(';').forEach((c) => {
                document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/');
            });
        }
    },

    /**
     * Clears up all the saved items.
     */
    clearAll() {
        try {
            this.clearCookies();
            if (this.isLocalStorageAvailable()) {
                localStorage.clear();
            }
        } catch (e) {
            //
        }
    },

    /**
     * Sets a serizalized value against requested key.
     * @param {String} key
     * @param {String} value
     */
    set(key, value) {
        if (this.isLocalStorageAvailable()) {
            try {
                localStorage.setItem(key, value);
            } catch (e) {
                // LoggerService.reportError(e);
            }
        }
    },

    /**
     * Returns serialized value stored against requested key.
     * @param {String} key
     */
    get(key) {
        if (this.isLocalStorageAvailable()) {
            return localStorage.getItem(key);
        }
        return null;
    },

    /**
     * Removes value stored against requested key.
     * @param {String} key
     */
    remove(key) {
        if (this.isLocalStorageAvailable()) {
            localStorage.removeItem(key);
        }
    }
};

export default DatabaseService;
