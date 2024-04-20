import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Summary from "../features/Summary";
import OrderReport from "../pages/OrderReport";
import MyReports from "../pages/MyReports";
import Business from "../features/Business"
import DataProviders from "../features/DataProviders"
import LegalStatus from "../features/LegalStatus"
import NetworkMentions from "../features/NetworkMentions"
import SocialNetworks from "../features/SocialNetworks"
import NotFound from "../features/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: "/", element: <Navigate to="/summary"/>},
            {path: 'orderReport', element: <OrderReport/>},
            {path: 'myReports', element: <MyReports/>},
            {path: 'summary', element: <Summary/>},
            {path: 'business', element: <Business/>},
            {path: 'dataProviders', element: <DataProviders/>},
            {path: 'legalStatus', element: <LegalStatus/>},
            {path: 'networkMentions', element: <NetworkMentions/>},
            {path: 'socialNetworks', element: <SocialNetworks/>},
            {path: '*', element: <NotFound/>},
        ]
    }
])