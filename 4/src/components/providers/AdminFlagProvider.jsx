import { createContext, useState } from "react";

export const AdminFlagContext = createContext({}); // 빈 객체를 디폴트 값으로 설정

export const AdminFlagProvider = props => {
    const { children } = props;

    const [isAdmin, setIsAdmin] = useState(false);

    return(
        <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
            {children}
        </AdminFlagContext.Provider>
    )
}

