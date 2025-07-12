import { createContext, useContext, useState, useMemo } from 'react';

export function createDataContext() {
    const Context = createContext();

    const Provider = ({ children, data }) => {
        const [items, setItems] = useState(data);

        const value = useMemo(() => ({ items, setItems }), [items]);

        return <Context.Provider value={value}>{children}</Context.Provider>;
    };

    const useData = () => {
        const context = useContext(Context);
        if (!context) {
            throw new Error('useData must be used within a DataProvider');
        }
        return context;
    };

    return [Provider, useData];
}
