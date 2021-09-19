import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders the Mens Page', () => {
        render(
            <App />
        )
        //click left button
        const leftClick = {button: 0}
        //find the nav link
        userEvent.click(screen.getByText(/Mens/), leftClick)
        // check that the content changed to the new page
        expect(screen.getByText(/Hello Men/)).toBeInTheDocument()
})

test('renders the Womens Page', () => {
    render(
        <App />
    )
    //click left button
    const leftClick = {button: 0}
    //find the nav link
    userEvent.click(screen.getByText(/Womens/), leftClick)
    // check that the content changed to the new page
    expect(screen.getByText(/Hello Women/)).toBeInTheDocument()
})

test('renders the Basket Page', () => {
    render(
        <App />
    )
    //click left button
    const leftClick = {button: 0}
    //find the nav link
    userEvent.click(screen.getByText(/Basket/), leftClick)
    // check that the content changed to the new page
    expect(screen.getByText(/Hello Basket/)).toBeInTheDocument()
})

test('renders the Home Page', () => {
    render(
        <App />
    )
    //click left button
    const leftClick = {button: 0}
    //find the nav link
    userEvent.click(screen.getByText(/Home/), leftClick)
    // check that the content changed to the new page
    expect(screen.getByText(/Hello World/)).toBeInTheDocument()
})