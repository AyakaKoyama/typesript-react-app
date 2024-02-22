import { FC, ReactNode, memo } from "react";
import { Header } from "../organisms/layout/Header";

//Props の型は children というプロパティを持ち、その型は ReactNodeである
type Props = {
    children: ReactNode
}
export const HeaderLayout: FC<Props> = memo((props) => {
    //props オブジェクトから childrenを取り出す
    //{children}ではHeader以外の子要素が参照される
    const { children } = props;
    return (
        <>
            <Header />
            {children}
        </>

    )
})