import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
const cocktailSearchUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

export default function Landing() {
        const { drinks, searchTerm } = useLoaderData();
        return (
                <>
                        <SearchForm />
                        <CocktailList drinks={drinks} searchTerm={searchTerm} />
                </>
        );
}

export const loader = async () => {
        const searchTerm = "a";
        const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
        return { drinks: response.data.drinks, searchTerm };
};
