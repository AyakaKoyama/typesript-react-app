import { FC, ReactNode, memo } from "react";
import { Button } from "@chakra-ui/react";


//Propsでは親からbuttonの名称を受け取る
type Props = {
    children: ReactNode;
    onClick: () => void;
    disabled?: boolean;
    loading?: boolean
}
export const PrimaryButton: FC<Props> = memo((props) => {

    const { children, onClick, disabled = false, loading = false } = props;

    return (

        <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }} isLoading={loading} disabled={disabled || loading} onClick={onClick}>
            {children}
        </Button>

    )
})