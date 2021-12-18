import { createContext, useReducer } from "react";
import { NEXT_API_URL } from "@/config";
import emailConfirmationReducer, {
    initialState as initialEmailConfirmationState,
} from "../reducers/auth/emailConfirmation";
import registerReducer, {
    initialState as initialRegisterState,
} from "../reducers/auth/register";


export const GlobalContext = createContext({});

const Provider = ({ children }) => {
    
    const [emailConfirmationState, emailConfirmationDispatch] = useReducer(
        emailConfirmationReducer,
        initialEmailConfirmationState
    );
    const [registerState, registerDispatch] = useReducer(
        registerReducer,
        initialRegisterState
    );

    return (
        <GlobalContext.Provider
            value={{
                emailConfirmationState, emailConfirmationDispatch,
                registerState, registerDispatch,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default Provider;
