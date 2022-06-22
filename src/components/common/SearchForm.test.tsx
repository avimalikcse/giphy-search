import { render, screen, fireEvent } from '@testing-library/react';

import SearchForm from "./SearchForm";

const formSubmit = jest.fn()

const setup = () => {
    const utils = render(<SearchForm onFormSubmit={formSubmit} />)
    const input = utils.getByLabelText('search GIFs')
    return {
        input,
        ...utils,
    }
}
test('Test if Searh Bar is rendered ', async () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: 'gif' } })
    expect(input.getAttribute('value')).not.toBe('GIF')
    expect(input.getAttribute('value')).toBe('gif')
});

test('Test if Search form is submitted ', async () => {
    const { input } = setup()
    const searchBox = screen.getByPlaceholderText(/search GIFs/i);
    searchBox.setAttribute('value', 'fun')
    const submitButton = screen.getByLabelText('search')
    fireEvent.click(submitButton)
    expect(formSubmit).toBeCalled()
});