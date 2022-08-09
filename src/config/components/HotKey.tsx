import { useCallback, useEffect } from "react";

const useConfigHotKey = (open: boolean, setOpen: (x: boolean) => void) => {
    
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if ( e.ctrlKey && e.key === "d" ) {
            setOpen(!open)
        }
    }, [open])

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
        return () => {
          document.removeEventListener('keydown', onKeyDown);
        };
    }, [onKeyDown]);
}

export default useConfigHotKey