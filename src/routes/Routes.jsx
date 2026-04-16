import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import TimeLine from "../pages/timeline/TimeLine";
import ErrorPage from "../pages/errorPage/ErrorPage";
import FriendDetails from "../pages/friendDetails/FriendDetails";
import Stats from "../pages/stats/Stats";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Homepage></Homepage>
            },
            {
                path: '/timeline',
                element: <TimeLine></TimeLine>
            },
            {
                path: '/friendDetails/:friendId',
                element: <FriendDetails></FriendDetails>,
                loader: ()=> fetch('/friendData.json')
            },
            {
                path: '/stats',
                element: <Stats></Stats>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])