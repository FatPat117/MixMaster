import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Cocktail, Error, HomeLayout, Landing, Newsletter } from "./pages";

const router = createBrowserRouter([
        {
                path: "/",
                element: <HomeLayout />,
                errorElement: <Error />,
                children: [
                        {
                                index: true,
                                element: <Landing />,
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
