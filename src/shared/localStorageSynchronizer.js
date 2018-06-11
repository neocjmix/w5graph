export function restoreState(key) {
    try {
        const jsonState = localStorage.getItem(key);
        if (jsonState == null) return undefined;
        return JSON.parse(jsonState);
    } catch (err) {
        return undefined;
    }
}

export function saveState(state, key) {
    try {
        localStorage.setItem(key, JSON.stringify(state));
    } catch (err) {
        //ignore write error
    }
}

export default key => store => next => action => {
    const result = next(action);
    saveState(store.getState(), key);
    return result;
}