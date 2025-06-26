import axios from "axios";
import React from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export default function Newsletter() {
        const data = useActionData();
        const navigation = useNavigation();
        const isSubmitting = navigation.state === "submitting";
        return (
                <Form method="post" className="form">
                        <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>our newsletter</h4>
                        {/* Name */}
                        <div className="form-row">
                                <label htmlFor="name" className="form-label">
                                        name
                                </label>
                                <input type="text" id="name" name="name" className="form-input" required />
                        </div>

                        {/* Last Name */}
                        <div className="form-row">
                                <label htmlFor="lastName" className="form-label">
                                        last name
                                </label>
                                <input type="text" id="lastName" name="lastName" className="form-input" required />
                        </div>
                        {/* Email */}
                        <div className="form-row">
                                <label htmlFor="email" className="form-label">
                                        email
                                </label>
                                <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-input"
                                        required
                                        defaultValue={"test@test.com"}
                                />
                        </div>
                        {/* Button */}
                        <button
                                type="submit"
                                className="btn btn-block"
                                style={{ marginTop: "0.5rem" }}
                                disabled={isSubmitting}
                        >
                                {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                </Form>
        );
}

export const action = async ({ request }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        try {
                const response = await axios.post(newsletterUrl, data);
                toast.success(response.data.msg);
                return redirect("/");
        } catch (error) {
                toast.error(error?.response?.data?.msg || "Something went wrong");
                return null;
        }
};
