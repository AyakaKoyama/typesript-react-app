import { useContext } from "react"
import { LoginUserContext, LoginUserContextType } from "../providers/LoginUserProvider"

//フック化しておくとコンポーネントからuseLoginUserを使うだけで、Contextの値を参照できる
//返却の型がLoginUserContextType
export const useLoginUser = (): LoginUserContextType =>
    useContext(LoginUserContext)