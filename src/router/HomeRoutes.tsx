import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

// /コンポーネント配下のルーティング設定

export const homeRoutes = [
    {
        path: "/",
        exact: true,
        children: <Home />

    }, {
        path: "/user_management",
        exact: false,
        children: <UserManagement />
    }, {
        path: "/setting",
        exact: false,
        children: <Setting />
    }
]