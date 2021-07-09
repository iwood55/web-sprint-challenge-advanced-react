import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);

    const header = screen.queryByText(/checkout form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);

    const firstName = screen.getByLabelText(/first name:/i);
    userEvent.type(firstName, 'Cooper');

    const lastName = screen.getByLabelText(/last name:/i);
    userEvent.type(lastName, 'Jones');

    const address = screen.getByLabelText(/address:/i);
    userEvent.type(address, '210 Morse Boulevard');

    const city = screen.getByLabelText(/city:/i);
    userEvent.type(city, 'Constantine');

    const state = screen.getByLabelText(/state:/i);
    userEvent.type(state, 'Indiana');

    const zip = screen.getByLabelText(/zip:/i);
    userEvent.type(zip, '46013');

    const button = screen.getByRole("button");
    userEvent.click(button);

    const success = screen.getByTestId(/successMessage/i);
    expect(success).toBeInTheDocument();
});
