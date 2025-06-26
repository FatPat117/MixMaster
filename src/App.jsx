import { QueryClient } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Cocktail, Error, HomeLayout, Landing, Newsletter, SinglePageError } from "./pages";
import { loader as cocktailLoader } from "./pages/Cocktail";
import { loader as landingLoader } from "./pages/Landing";
import { action as newsletterAction } from "./pages/Newsletter";

const queryClient = new QueryClient({
        defaultOptions: {
                queries: {
                        staleTime: 1000 * 60 * 5,
                },
        },
});

const router = createBrowserRouter([
        {
                path: "/",
                element: <HomeLayout />,
                errorElement: <Error />,
                children: [
                        {
                                index: true,
                                element: <Landing />,
                                errorElement: <SinglePageError />,
                                loader: landingLoader,
                        },
                        {
                                path: "about",
                                element: <About />,
                        },
                        {
                                path: "/cocktail/:id",
                                element: <Cocktail />,
                                errorElement: <SinglePageError />,
                                loader: cocktailLoader,
                        },
                        {
                                path: "/newsletter",
                                element: <Newsletter />,
                                action: newsletterAction,
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
        return (
                <QueryClientProvider client={queryClient}>
                        <RouterProvider router={router} />
                        <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
        );
};
export default App;
