import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.nav`
        background: var(--white);
        .nav-center {
                width: var(--view-width);
                max-width: var(--max-width);
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                padding: 1.5rem 2rem;
        }

        .logo {
                font-size: clamp(1rem, 3vw, 2rem);
                color: var(--primary-500);
                font-weight: 700;
                letter-spacing: 2px;
                text-transform: uppercase;
        }
        .nav-links {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                margin-top: 1rem;

                .nav-link {
                        color: var(--grey-900);
                        padding: 0.5rem 0.5rem 0.5rem 0;
                        text-transform: capitalize;
                        letter-spacing: 2px;
                        font-weight: 500;
                        font-size: 1rem;
                        cursor: pointer;
                        transition: 0.2s ease-in-out all;
                        &:hover {
                                color: var(--primary-500);
                        }
                        &.active {
                                color: var(--primary-500);
                                text-decoration: underline;
                        }
                }
        }

        @media screen and (min-width: 768px) {
                .nav-center {
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                }

                .nav-links {
                        flex-direction: row;
                        gap: 1rem;
                        margin-top: 0;
                }
        }
`;

export default function Navbar() {
        return (
                <Wrapper>
                        <div className="nav-center">
                                <span className="logo">MixMaster</span>
                                <div className="nav-links">
                                        <NavLink to="/" className="nav-link">
                                                Home
                                        </NavLink>
                                        <NavLink to="/about" className="nav-link">
                                                About
                                        </NavLink>
                                        <NavLink to="/newsletter" className="nav-link">
                                                Newsletter
                                        </NavLink>
                                </div>
                        </div>
                </Wrapper>
        );
}
