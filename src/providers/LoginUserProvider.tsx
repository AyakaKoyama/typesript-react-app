import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { User } from "../types/api/user";
import { Route, Routes } from "react-router-dom";

export type LoginUserContextType = {
    loginUser: User | null;
    setLoginUser: Dispatch<SetStateAction<User | null>>
}

//ログイン情報のステート保持
export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType)

//Contextで扱ってる情報はどれかが更新されたとき、関連するコンポーネントがすべて再レンダリングされる
export const LoginUserProvider = (props: { children: ReactNode }) => {

    const { children } = props
    const [loginUser, setLoginUser] = useState<User | null>(null)
    return (
        <Routes>
            <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
                {children}
            </LoginUserContext.Provider>
        </Routes>
    )
}