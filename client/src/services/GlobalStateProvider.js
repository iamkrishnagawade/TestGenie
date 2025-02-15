import { createContext, useReducer } from "react";
 
const defaultGlobalState = {
    dataType: [
        {
            title: "Name",
            propertyName: "name"
        },
        {
            title: "Phone",
            propertyName: "phone"
        },
        {
            title: "Email",
            propertyName: "email"
        },
        {
            title: "Address",
            propertyName: "address"
        },
        {
            title: "Username",
            propertyName: "username"
        },
        {
            title: "Password",
            propertyName: "password"
        }
    ],
    previewMode: [
        {
            name: "JSON",
            value: "json",
            mode: "application/json"
        }
    ]
};

const globalStateContext = createContext(defaultGlobalState);
const dispatchStateContext = createContext(undefined);

export default function GlobalStateProvider({ children  }) {
    const [ state, dispatch ] = useReducer(
        (state, newValue) => ({ ...state, ...newValue }),
        defaultGlobalState
    );

    return (
        <globalStateContext.Provider value={ state }>
            <dispatchStateContext.Provider value={ dispatch }>
                { children  }
            </dispatchStateContext.Provider>
        </globalStateContext.Provider>
    )
}

export { globalStateContext, dispatchStateContext }