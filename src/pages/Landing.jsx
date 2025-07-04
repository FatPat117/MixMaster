import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
const cocktailSearchUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

const searchCocktailsQuery = (searchTerm) => {
        return {
                queryKey: ["search", searchTerm || "all"],
                queryFn: async () => {
                        searchTerm = searchTerm || "a";
                        const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
                        return response.data.drinks;
                },
        };
};

export const loader =
        (queryClient) =>
        async ({ request }) => {
                const url = new URL(request.url);
                const searchTerm = url.searchParams.get("search") || "a";
                await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
                return { searchTerm };
        };

export default function Landing() {
        const { searchTerm } = useLoaderData();
        const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));
        return (
                <>
                        <SearchForm searchTerm={searchTerm} />
                        <CocktailList drinks={drinks} searchTerm={searchTerm} />
                </>
        );
}
