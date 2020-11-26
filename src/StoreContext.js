import { createContext } from 'react';

const StoreContext = createContext(null);

export const Provider = ({ store, children }) => {
    return (
        <StoreContext.Provider value={store}>
            { children }
        </StoreContext.Provider>
    );
};

export default StoreContext;