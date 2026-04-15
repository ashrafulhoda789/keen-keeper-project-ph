import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import TimeLine from "../pages/timeline/TimeLine";
import ErrorPage from "../pages/errorPage/ErrorPage";
import FriendDetails from "../pages/friendDetails/FriendDetails";

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
                path: '/friendDetails/:id',
                element: <FriendDetails></FriendDetails>,
                loader: ()=> fetch('/friendData.json')
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])