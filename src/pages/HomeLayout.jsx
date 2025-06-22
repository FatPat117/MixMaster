import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function HomeLayout() {
        return (
                <>
                        <Navbar />
                        <section className="page">
                                <Outlet />
                        </section>
                </>
        );
}
