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

test('renders the Mens Page with ID', () => {
        render(
            <App />
        )
        //click left button
        const leftClick = {button: 0}
        //find the nav link
        userEvent.click(screen.getByText(/Mens/), leftClick)
        // check that the content changed to the new page
        expect(screen.getByTestId('mens-router-page')).toBeInTheDocument()
})

test('renders the Womens Page with ID', () => {
    render(
        <App />
    )
    //click left button
    const leftClick = {button: 0}
    //find the nav link
    userEvent.click(screen.getByText(/Womens/), leftClick)
    // check that the content changed to the new page
    expect(screen.getByTestId('women-router-page')).toBeInTheDocument()
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
    userEvent.click(screen.getByTestId('basket-router-link'), leftClick)
    // check that the content changed to the new page
    expect(screen.getByText(/Hello Basket/)).toBeInTheDocument()
})

test('renders the Basket Page by ID', () => {
    render(
        <App />
    )
    //click left button
    const leftClick = {button: 0}
    //find the nav link
    userEvent.click(screen.getByTestId('basket-router-link'), leftClick)
    // check that the content changed to the new page
    expect(screen.getByTestId('basket-router-page')).toBeInTheDocument()
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

test('renders the Home Page by ID', () => {
    render(
        <App />
    )
    //click left button
    const leftClick = {button: 0}
    //find the nav link
    userEvent.click(screen.getByText(/Home/), leftClick)
    // check that the content changed to the new page
    expect(screen.getByTestId('home-router-page')).toBeInTheDocument()
})

test('Font awesome icon rendors', () => {
    render(<App />);
    expect(screen.getByTestId('log-in')).toBeInTheDocument()
})