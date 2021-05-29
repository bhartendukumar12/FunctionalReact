import { createSelectorCreator, defaultMemoize } from 'reselect';
import isEqual from 'lodash/isEqual';

/**
 * Helper class for Selector
 */
const SelectorHelper = {

    /**
     * create a "selector creator" that uses lodash.isEqual instead of ===
     */
    createCustomSelector: createSelectorCreator(
        defaultMemoize,
        isEqual
    )
};

export default SelectorHelper;
