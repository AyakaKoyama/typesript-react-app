import { useCallback, useState } from "react"
import { User } from "../types/api/user"

type Props = {
    id: number
    users: Array<User>
    onOpen: () => void
}

//選択されたユーザーの情報を返していくロジック部分
export const useSelectUser = () => {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const onSelectUser = useCallback((props: Props) => {
        const { id, users, onOpen } = props;
        //Cardから渡されたIDが一致した要素を返す
        const targetUser = users.find((user) => user.id === id)
        // targetUserがundefinedでないことを確認してからselectedUserにセットする
        if (targetUser !== undefined) {
            setSelectedUser(targetUser);
        }
        onOpen()
    }, [])
    return { onSelectUser, selectedUser }
}