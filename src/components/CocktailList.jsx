import React from "react";
import styled from "styled-components";

import CocktailCard from "./CockTailCard";

const Wrapper = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
`;

export default function CocktailList({ drinks }) {
        if (drinks.length < 1) {
                return <h4 style={{ textAlign: "center" }}>No Matching Cocktails Found...</h4>;
        }

        const formattedDrinks = drinks.map((drink) => {
                const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drink;
                return { id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass };
        });

        return (
                <Wrapper>
                        {formattedDrinks.map((drink) => {
                                return <CocktailCard key={drink.id} {...drink} />;
                        })}
                </Wrapper>
        );
}
