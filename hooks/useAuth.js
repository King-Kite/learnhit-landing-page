import { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "@/store/providers";
import { ModalContext } from "@/store/providers/Modal";
import { openModal } from "@/store/actions/modal";
import { AUTH_FAILED } from "@/store/actions/types";

const useAuth = () => {
    const [hasAccess, setHasAccess] = useState(false);

    const timeout = useRef(null);

    const {
        authDispatch,
        authState: { isAuthenticated, loading },
    } = useContext(GlobalContext);

    const { modalDispatch } = useContext(ModalContext);

    useEffect(() => {
        if (isAuthenticated === true) setHasAccess(true);
        else if (isAuthenticated === false) {
            setHasAccess(false);
        }
        return () => setHasAccess(false);
    }, [isAuthenticated]);

    useEffect(() => {
        if (loading === true) {
            timeout.current = setTimeout(() => {
                authDispatch({ 
                    type: AUTH_FAILED,
                    payload: "Service Timeout"
                })
                openModal({
                    color: "warning",
                    header: "Timeout",
                    message: "Service Timeout",
                    type: "warning"
                })(modalDispatch)
            }, (1000 * 60 * 1.5))
        } else {
            if (timeout.current) clearTimeout(timeout.current)
        }
        return () => {
            if (timeout.current) clearTimeout(timeout.current)
        }
    }, [loading, modalDispatch])

    return {
        hasAccess,
        isAuthenticated,
        loading
    };
};

export default useAuth;
