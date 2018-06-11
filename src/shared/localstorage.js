export function restoreState(key) {
    try {
        const jsonState = localStorage.getItem(key);
        if (jsonState == null) return undefined;
        return JSON.parse(jsonState);
    }catch (err){
        return undefined;
    }
}

export function saveState(store, key) {
    try {
        localStorage.setItem(key, JSON.stringify(store.getState()));
    }catch(err){
        //ignore write error
    }
}