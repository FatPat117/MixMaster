import React from "react";
import { Form, useNavigation } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
        margin-bottom: 6rem;
        .form {
                display: grid;
                grid-template-columns: 1fr auto;
        }
        .form-input {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
        }
        .btn {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
        }
`;

export default function SearchForm({ searchTerm }) {
        const navigation = useNavigation();
        const isSubmitting = navigation.state === "submitting";
        return (
                <Wrapper>
                        <Form className="form" method="get" action="/">
                                <input type="search" name="search" className="form-input" defaultValue={searchTerm} />
                                <button type="submit" className="btn" disabled={isSubmitting}>
                                        {isSubmitting ? "Searching..." : "Search"}
                                </button>
                        </Form>
                </Wrapper>
        );
}
