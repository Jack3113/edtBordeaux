import { createStore } from 'redux';
import { persistCombineReducers, persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import rootReducer from './../reducers';
import Translator from '../utils/translator';

const config = {
    timeout: 10000,
    key: 'root',
    storage: AsyncStorage,
};
const reducer = persistCombineReducers(config, rootReducer);

export default () => {
    const store = createStore(reducer);
    const pStore = persistStore(store);

    let previousLanguage = store.getState().language;

    Translator.setLanguage(previousLanguage);

    store.subscribe(() => {
        const nextLanguage = store.getState().language;
        if (nextLanguage !== previousLanguage) {
            Translator.setLanguage(nextLanguage);
            previousLanguage = nextLanguage;
        }
    });

    return { store, pStore };
};
