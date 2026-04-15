import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import TimeLine from "../pages/timeline/TimeLine";
import ErrorPage from "../pages/errorPage/ErrorPage";

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
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])