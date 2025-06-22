import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Landing() {
        const { msg } = useLoaderData();
        return <div>landing</div>;
}

export const loader = async () => {
        return { msg: "hello" };
};
