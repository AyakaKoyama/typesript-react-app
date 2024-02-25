import axios from "axios"
import { useCallback, useState } from "react"
import { User } from "../types/api/user"
import { useNavigate } from "react-router-dom"
import { useMessage } from "./useMessage"

export const useAuth = () => {

    const navigate = useNavigate();
    const { showMessage } = useMessage();
    const [loading, setLoading] = useState(false);

    //axiosで正常にid取得したらホーム画面に遷移、それ以外はエラー
    const login = useCallback((id: string) => {

        setLoading(true);

        axios
            .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
                if (res.data) {
                    showMessage({ title: "ログインしました", status: "success" })
                    navigate("/home")
                } else {
                    showMessage({ title: "ユーザーが見つかりません", status: "error" })
                }
            }).catch(() => showMessage({ title: "ログインできません", status: "success" }))
            .finally(() => setLoading(false))
    }, [navigate, showMessage])

    return { login, loading }
}