import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MOCKED_TYPE_DATA } from "../../../utils/mockedData";
import GiphyCard from './GiphyCard';

const onSelect = jest.fn()

function setup() {
    return render(< GiphyCard cardDetails={MOCKED_TYPE_DATA} setSelectedGIF={onSelect} />);
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
