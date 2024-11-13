import { createContext, useState } from "react";
import { toast } from "react-toastify";

// 1. Create Context Here
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    // Initialize State Here for login Details
    const [authDetails, setAuthDetails] = useState({
        isLoggedIn: false,
        token: null,
    });

    // Login function
    const login = (token) => {
        setAuthDetails({ isLoggedIn: true, token: token });
    };

    // Logout function
    const logout = () => {
        setAuthDetails({ isLoggedIn: false, token: null });
        toast.success('Logout SuccessFull ✅')
    };

    // values object 
    const value = {
        authDetails,
        setAuthDetails,
        login, logout,
    };

    return (

        // 2. Provide Context Here
        // Wrap the children in the Provider component and expose the value prop to the children
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;



