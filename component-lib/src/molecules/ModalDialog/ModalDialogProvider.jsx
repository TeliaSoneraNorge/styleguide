import React, { useRef, useState, useEffect } from 'react';

export const Context = React.createContext();

/**
 * Status: *in progress*.
 * Category: Notifications
 *
 * Provides a container inside which all dialogs will be rendered
 */
export default function ModalDialogProvider({ children }) {
    const modalRef = useRef();
    const [context, setContext] = useState();

    useEffect(() => {
        setContext(modalRef.current);
    }, []);

    return (
        <>
            <Context.Provider value={context}>{children}</Context.Provider>
            <div ref={modalRef} />
        </>
    );
}