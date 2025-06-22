import React from "react";
import { Link, useRouteError } from "react-router-dom";
import styled from "styled-components";
import img from "../assets/not-found.svg";

const Wrapper = styled.div`
        min-height: 100vh;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
                width: 90vw;
                max-width: 600px;
                display: block;
                margin-bottom: 2rem;
                margin-top: -3rem;
        }
        h3 {
                margin-bottom: 0.5rem;
        }

        p {
                line-height: 1.5;
                margin-top: 0.5rem;
                margin-bottom: 1rem;
                color: var(--grey-500);
        }
        a {
                color: var(--primary-500);
                text-transform: capitalize;
        }
        @media screen and (min-width: 768px) {
                flex-direction: column;
                img {
                        margin-top: 0;
                }
        }
`;
export default function Error() {
        const error = useRouteError();
        if (error.status === 404) {
                return (
                        <Wrapper>
                                <img src={img} alt="not found" />
                                <h3>Ohh!</h3>
                                <p>We can't seem to find page you are looking for</p>
                                <Link to="/">back home</Link>
                        </Wrapper>
                );
        }
        return (
                <Wrapper>
                        <div>
                                <h3>Something went wrong</h3>
                        </div>
                </Wrapper>
        );
}
