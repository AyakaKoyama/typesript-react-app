import { ChangeEvent, FC, memo, useEffect, useState } from "react";
import { Stack, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, ModalFooter } from "@chakra-ui/react";
import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    user: User | null;
    isAdmin?: boolean
}
export const UserDatailModal: FC<Props> = memo((props) => {

    //isAdminはデフォルトでは管理者ではないためfalse
    const { isOpen, onClose, user, isAdmin = false } = props;

    const onClickUpdate = () => alert()

    const [username, setUsername] = useState(``);
    const [name, setName] = useState(``);
    const [email, setEmail] = useState(``);
    const [phone, setPhone] = useState(``);

    const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)
    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)

    //管理者のユーザー情報更新用(undefinedの場合は空文字として設定)
    //渡されるuserの値が更新するたびに実行
    useEffect(() => {
        setUsername(user?.username ?? ``);
        setName(user?.name ?? ``);
        setEmail(user?.email ?? ``);
        setPhone(user?.phone ?? ``)
    }, [user])

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            autoFocus={false}
            motionPreset="slideInBottom">
            <ModalOverlay>
                <ModalContent pb={2}>
                    <ModalHeader>ユーザー詳細</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mx={4}>
                        <Stack spacing={4}>
                            <FormControl>
                                <FormLabel>名前</FormLabel>
                                <Input value={username} onChange={onChangeUserName} isReadOnly={!isAdmin} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>フルネーム</FormLabel>
                                <Input value={name} onChange={onChangeName} isReadOnly={!isAdmin} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>MAIL</FormLabel>
                                <Input value={email} onChange={onChangeEmail} isReadOnly={!isAdmin} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>TELL</FormLabel>
                                <Input value={phone} onChange={onChangePhone} isReadOnly={!isAdmin} />
                            </FormControl>
                        </Stack>
                    </ModalBody>
                    {isAdmin && (
                        <ModalFooter>
                            <PrimaryButton onClick={onClickUpdate}> 更新</PrimaryButton>
                        </ModalFooter>
                    )}
                </ModalContent>
            </ModalOverlay>
        </Modal>
    )
})