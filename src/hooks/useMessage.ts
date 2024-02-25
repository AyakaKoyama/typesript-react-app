import { useToast } from "@chakra-ui/react";
import { useCallback } from "react"

//statusで文字列しか受け取れない型指定(どれかに一致する文字列)
type Props = {
    title: string;
    status: "info" | "warning" | "success" | "error";
}

export const useMessage = () => {
    const toast = useToast();

    //props渡してtoast実行
    const showMessage = useCallback((props: Props) => {
        const { title, status } = props;
        toast({
            title,
            status,
            position: "top",
            duration: 2000,
            isClosable: true
        })
    }, [toast]);
    
    return { showMessage }
}