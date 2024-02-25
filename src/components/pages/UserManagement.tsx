import { Center, Spinner, Wrap, WrapItem, useDisclosure } from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect } from "react";
import { UserCard } from "../organisms/user/userCard";
import { useAllUsers } from "../../hooks/useAllUser";
import { UserDatailModal } from "../organisms/user/userDatailModal";
import { useSelectUser } from "../../hooks/useSelectUser";

export const UserManagement: FC = memo(() => {
    const { getUsers, loading, users } = useAllUsers();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { onSelectUser, selectedUser } = useSelectUser();

    //画面表示時にユーザー一覧を取得したい
    useEffect(() => getUsers(), [])

    //userCardで設定したユーザーidと一致するidをusersから探して、ユーザー情報をモーダルに設定
    //userが変更されるたびに、idの引数は設定しなおす
    const onClickUser = useCallback((id: number) => {
        onSelectUser({ id, users, onOpen })
    }, [users, onSelectUser, onOpen])

    return (
        <>
            {loading ? (
                <Center h="100vh">
                    <Spinner />
                </Center>
            ) : (
                <Wrap p={{ base: 4, md: 10 }}>

                    {users.map((user) => (
                        <WrapItem key={user.id} mx="auto">
                            <UserCard
                                imageUrl="https://source.unsplash.com/random"
                                userName={user.username}
                                fullName={user.name}
                                onClick={onClickUser}
                                id={user.id}
                            />
                        </WrapItem>
                    ))}

                </Wrap>
            )}
            <UserDatailModal isOpen={isOpen} onClose={onClose} user={selectedUser} />
        </>
    )
})