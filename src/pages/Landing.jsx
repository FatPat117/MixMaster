import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
const cocktailSearchUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

export default function Landing() {
        const { msg } = useLoaderData();
        return <div>landing</div>;
}

export const loader = async () => {
        const searchTerm = "a";
        const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
        console.log(response);
        return { drinks: response.data.drinks, searchTerm };
};
