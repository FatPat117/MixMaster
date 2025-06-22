import React from "react";
import { useRouteError } from "react-router-dom";
export default function SinglePageError() {
        const error = useRouteError();
        return <h2>{error.message}</h2>;
}
