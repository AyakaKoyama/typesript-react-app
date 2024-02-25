import { FC, memo } from "react";
import { Box, Image, Stack, Text, } from "@chakra-ui/react";

//Propsでは親からbuttonの名称を受け取る
//モーダル表示；Onclickの引数にユーザーのidを設定する
type Props = {
    imageUrl: string;
    userName: string;
    fullName: string;
    onClick: (id: number) => void;
    id: number
}
export const UserCard: FC<Props> = memo((props) => {

    const { imageUrl, userName, fullName, onClick, id } = props;

    return (
        <Box
            w="260px"
            h="260px"
            bg="white"
            borderRadius="10px"
            shadow="md"
            p={4}
            _hover={{ cursor: "pointer", opacity: 0.8 }}
            onClick={() => onClick(id)}
        >
            <Stack textAlign="center">
                <Image
                    borderRadius="full"
                    boxSize="160px"
                    alt={userName}
                    m="auto"
                    src={imageUrl}>
                </Image>
                <Text fontSize="lg" fontWeight="bold">{userName}</Text>
                <Text fontSize="sm" color="gray">{fullName}</Text>
            </Stack>
        </Box>
    )
})