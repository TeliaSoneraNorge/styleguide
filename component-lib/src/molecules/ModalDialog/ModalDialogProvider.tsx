import React, { useRef, useState, useEffect } from 'react';

// @ts-expect-error ts-migrate(2554) FIXME: Expected 1-2 arguments, but got 0.
export const Context = React.createContext();

/**
 * Status: *in progress*.
 * Category: Notifications
 *
 * Provides a container inside which all dialogs will be rendered
 */
export default function ModalDialogProvider({
  children
}: any) {
  const modalRef = useRef();
  const [context, setContext] = useState();

  useEffect(() => {
    setContext(modalRef.current);
  }, []);

  return (
    <>
      <Context.Provider value={context}>{children}</Context.Provider>
      {/* @ts-expect-error ts-migrate(2322) FIXME: Type 'undefined' is not assignable to type 'HTMLDi... Remove this comment to see the full error message */}
      <div ref={modalRef} />
    </>
  );
}
