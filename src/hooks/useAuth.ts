import axios from "axios"
import { useCallback, useState } from "react"
import { User } from "../types/api/user"
import { useNavigate } from "react-router-dom"
import { useMessage } from "./useMessage"
import { useLoginUser } from "./useLoginUser"

export const useAuth = () => {

    const navigate = useNavigate();
    const { showMessage } = useMessage();
    const [loading, setLoading] = useState(false);
    const { loginUser, setLoginUser } = useLoginUser();

    //axiosで正常にid取得したらホーム画面に遷移、それ以外はエラー
    const login = useCallback((id: string) => {

        setLoading(true);

        axios
            .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
                if (res.data) {
                    const isAdmin = res.data.id === 10 ? true : false;
                    setLoginUser({ ...res.data, isAdmin })
                    showMessage({ title: "ログインしました", status: "success" })
                    navigate("/home")
                } else {
                    showMessage({ title: "ユーザーが見つかりません", status: "error" })
                }
            }).catch(() => showMessage({ title: "ログインできません", status: "success" }))
            .finally(() => setLoading(false))
    }, [navigate, showMessage, setLoginUser])

    return { login, loading }
}