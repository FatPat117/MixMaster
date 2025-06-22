import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Cocktail, Error, HomeLayout, Landing, Newsletter } from "./pages";
import { loader as landingLoader } from "./pages/Landing";

const router = createBrowserRouter([
        {
                path: "/",
                element: <HomeLayout />,
                errorElement: <Error />,
                children: [
                        {
                                index: true,
                                element: <Landing />,
                                loader: landingLoader,
                        },
                        {
                                path: "about",
                                element: <About />,
                        },
                        {
                                path: "/cocktail/:id",
                                element: <Cocktail />,
                        },
                        {
                                path: "/newsletter",
                                element: <Newsletter />,
                        },
                ],
        },

        {
                future: {
                        v7_startTransition: true,
                },
        },
]);

const App = () => {
        return <RouterProvider router={router} />;
};
export default App;
