import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MOCKED_DATA } from "../../../utils/mockedData";
import GiphyList from "./GiphyList";

const onSelect = jest.fn()

function setup() {
    return render(< GiphyList items={[MOCKED_DATA]}
        pagination={{ total_count: 1, count: 10, offset: 0 }}
        setSelectedGIF={onSelect}
        loadMore={() => { }}
    />);
}

test('Test if item is displayed a card ', () => {
    setup()
    const cardTittle = screen.getByText(/Spinning/i);
    expect(cardTittle).toBeInTheDocument();
});

test('Test if item is click selecting a card', () => {
    setup()
    const cardTittle = screen.getByText(/Spinning/i);
    fireEvent.click(cardTittle)
    expect(onSelect).toBeCalled()
});


test('Test snapshots of the components', async () => {
    const { asFragment } = setup()
    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    })
});
