import { FC, memo } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";

export const Router: FC = memo(() => {
    //elementで{({match:{url}})}を使いたい
    return (
        <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/home" element={

                <Routes>
                    {homeRoutes.map((route) => (
                        <Route key={route.path} path={`${"/home"}${route.path}`}  >
                            {route.children}
                        </Route>
                    ))}
                </Routes>
            } />
        </Routes>
    )

})