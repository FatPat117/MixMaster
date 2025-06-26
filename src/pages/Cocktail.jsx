import axios from "axios";
import React from "react";
import { Link, Navigate, useLoaderData, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
        header {
                text-align: center;
                margin-bottom: 3rem;
                .btn {
                        margin-bottom: 1rem;
                }
        }
        .img {
                border-radius: var(--borderRadius);
        }
        .drink-info {
                padding-top: 2rem;
        }
        .drink p {
                font-weight: 700;
                text-transform: capitalize;
                line-height: 2;
                margin-bottom: 1rem;
        }
        .drink-data {
                margin-right: 0.5rem;
                background: var(--primary-300);
                padding: 0.25rem 0.5rem;
                border-radius: var(--borderRadius);
                color: var(--primary-700);
                letter-spacing: var(--letterSpacing);
        }
        .ing {
                display: inline-block;
                margin-right: 0.5rem;
        }
        @media (min-width: 992px) {
                .drink {
                        display: grid;
                        grid-template-columns: 2fr 3fr;
                        gap: 3rem;
                        align-items: center;
                }
                .drink-info {
                        padding-top: 0;
                }
        }
`;

const singleCocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export default function Cocktail() {
        const navigate = useNavigate();
        const { id, data } = useLoaderData();

        if (!data.drinks) {
                return <Navigate to="/" />;
        }

        const singleCocktail = data.drinks[0];

        const {
                strDrinkThumb: image,
                strDrink: name,
                strAlcoholic: info,
                strCategory: category,
                strGlass: glass,
                strInstructions: instructions,
        } = singleCocktail;

        const validIngredients = Object.keys(singleCocktail).filter(
                (item) =>
                        item.startsWith("strIngredient") && singleCocktail[item] !== null && singleCocktail[item] !== ""
        );
        const ingredients = validIngredients.map((item) => singleCocktail[item]);

        return (
                <Wrapper>
                        <header>
                                <Link to="/" className="btn">
                                        Back home
                                </Link>
                                <h3>{name}</h3>
                        </header>
                        <div className="drink">
                                <img src={image} alt={name} className="img" />
                                <div className="drink-info">
                                        <p>
                                                <span className="drink-data">name:</span>
                                                {name}
                                        </p>
                                        <p>
                                                <span className="drink-data">Category:</span>
                                                {category}
                                        </p>
                                        <p>
                                                <span className="drink-data">Info:</span>
                                                {info}
                                        </p>
                                        <p>
                                                <span className="drink-data">Glass:</span>
                                                {glass}
                                        </p>
                                        <p>
                                                <span className="drink-data">Ingredients:</span>
                                                <div className="ingredients">
                                                        {ingredients.map((item, index) => {
                                                                return (
                                                                        <span key={index} className="ing">
                                                                                {item}
                                                                                {index < ingredients.length - 1 && ", "}
                                                                        </span>
                                                                );
                                                        })}
                                                </div>
                                        </p>
                                        <p>
                                                <span className="drink-data">Instructions:</span>
                                                {instructions}
                                        </p>
                                </div>
                        </div>
                </Wrapper>
        );
}

export const loader = async ({ params }) => {
        const { id } = params;
        const { data } = await axios.get(`${singleCocktailUrl}${id}`);
        return { id, data };
};
