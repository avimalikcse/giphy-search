import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MOCKED_DATA } from '../../../utils/mockedData';
import GiphyListingContainer from './GiphyListContainer';



global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () =>
            Promise.resolve({
                status: 200,
                data: { data: [MOCKED_DATA], pagination: { total: 1, limit: 10, offset: 0 } },
            }),
    }),
) as jest.Mock;

test('Test if Search Bar is rendered ', async () => {
    render(< GiphyListingContainer />);
    await waitFor(() => {
        const searchBox = screen.getByPlaceholderText(/search GIFs/i);
        expect(searchBox).toBeInTheDocument();
    })
});


test('Test snapshots of the components', async () => {
    const { asFragment } = render(< GiphyListingContainer />);
    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    })
});
