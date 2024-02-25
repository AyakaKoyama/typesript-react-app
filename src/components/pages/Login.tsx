import { Box, Button, Divider, Flex, FormLabel, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useState } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: FC = memo(() => {

    const { login, loading } = useAuth();

    //初期値はplaceholderなので空文字
    const [userId, setuserID] = useState("")
    //テキストボックスのイベントの型指定はChangeEvent<HTMLInputElement>と覚える
    const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setuserID(e.target.value)

    //trim：空白行を取り除く
    const onClickLogin = () => {
        if (userId.trim() !== "") {
            login(userId);
        }
    };
    return (
        <Flex align="center" justify="center" height="100vh">
            <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
                <Heading as="h1" size="lg" textAlign="center">ユーザー管理アプリ</Heading>
                <Divider my={4} />
                <Stack spacing={6} py={4} px={10}>
                    <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId} />
                    <PrimaryButton disabled={userId.trim() === ""} loading={loading} onClick={onClickLogin} >ログイン</PrimaryButton>
                </Stack>
            </Box>
        </Flex>
    )
})