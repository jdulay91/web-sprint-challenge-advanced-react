import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
});

test("form shows success message on submit with form details", async() => {
    render(<CheckoutForm/>)

    //Document Targetters
    const firstNameInput = screen.getByLabelText(/first name:/i)
    const lastNameInput = screen.getByLabelText(/last name:/i)
    const addressInput = screen.getByLabelText(/Address:/i)
    const cityInput = screen.getByLabelText(/City:/i)
    const stateInput = screen.getByLabelText(/State:/i)
    const zipInput = screen.getByLabelText(/Zip:/i)
    const submitBtn = screen.getByRole('button',{
        name: /Checkout/i
    })
    
    //filling out input information

    fireEvent.change(firstNameInput,{
        target: {value: 'lastName'}
    })
    fireEvent.change(lastNameInput,{
        target: {value: 'firstName'}
    })
    fireEvent.change(addressInput,{
        target: {value: '12345dogtown'}
    })
    fireEvent.change(cityInput,{
        target: {value: 'San Diego'}
    })
    fireEvent.change(stateInput,{
        target: {value: 'NY'}
    })
    fireEvent.change(zipInput,{
        target: {value: '99999'}
    })

    //click event
    fireEvent.click(submitBtn)
    
    //assertions
    expect(await screen.findByText(/dog/i)).toBeInTheDocument();
});
