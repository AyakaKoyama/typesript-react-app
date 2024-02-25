import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { User } from "../types/api/user";

type LoginUser = User & { isAdmin: boolean }

export type LoginUserContextType = {
    loginUser: LoginUser | null;
    setLoginUser: Dispatch<SetStateAction<LoginUser | null>>
}

//ログイン情報のステート保持
export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType)

//Contextで扱ってる情報はどれかが更新されたとき、関連するコンポーネントがすべて再レンダリングされる
export const LoginUserProvider = (props: { children: ReactNode }) => {

    const { children } = props
    const [loginUser, setLoginUser] = useState<LoginUser | null>(null)
    return (
        <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
            {children}
        </LoginUserContext.Provider>


    )
}