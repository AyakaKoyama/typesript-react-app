import { FC, memo } from "react";
import { Stack, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { User } from "../../../types/api/user";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    user:User|null
}
export const UserDatailModal: FC<Props> = memo((props) => {

    const { isOpen, onClose,user } = props;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            autoFocus={false}
            motionPreset="slideInBottom">
            <ModalOverlay>
                <ModalContent pb={6}>
                    <ModalHeader>ユーザー詳細</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mx={4}>
                        <Stack spacing={4}>
                            <FormControl>
                                <FormLabel>名前</FormLabel>
                                <Input value={user?.username} isReadOnly />
                            </FormControl>
                            <FormControl>
                                <FormLabel>フルネーム</FormLabel>
                                <Input value={user?.name} isReadOnly />
                            </FormControl>
                            <FormControl>
                                <FormLabel>MAIL</FormLabel>
                                <Input value={user?.email} isReadOnly />
                            </FormControl>
                            <FormControl>
                                <FormLabel>TELL</FormLabel>
                                <Input value={user?.phone} isReadOnly />
                            </FormControl>
                        </Stack>
                    </ModalBody>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    )
})