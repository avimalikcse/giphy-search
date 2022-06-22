import { render, screen, waitFor } from '@testing-library/react';
import App from './App';


test('renders App is working', async() => {
    render( < App / > );
    await waitFor(() => {
        const headerText = screen.getByText(/Giphy Search/i);
        expect(headerText).toBeInTheDocument();
    })
});

test('Test snapshots of the components', async() => {
    const { asFragment } = render( < App / > );
    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    })
});
test('Test if layout Loaded', async() => {
    const { getByTestId } = render( < App / > );
    await waitFor(() => {
        expect(getByTestId("main-layout-testId")).toBeTruthy();
    })
});