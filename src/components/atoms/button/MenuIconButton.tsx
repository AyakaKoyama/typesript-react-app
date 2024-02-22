import { FC, memo } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";


//受け取るPropsの型定義
type Props = {
    onOpen: () => void;
}
export const MenuIconButton: FC<Props> = memo((props) => {

    //propsでOnOpenを受け取ってそれを使っていく
    const { onOpen } = props;

    return (

        <IconButton
            aria-label="メニューボタン"
            icon={<HamburgerIcon />}
            size="sm"
            variant="unstyled"
            display={{ base: "block", md: "none" }}
            onClick={onOpen}
        />

    )
})