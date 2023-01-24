import Search from './Search';
import {fireEvent, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('<Search />', () => {
    it('calls onSearch when clicking search', () => {
        const spy = jest.fn()
        render(<Search onSearch={spy} />);
        const button = screen.getByRole('button');

        userEvent.type(screen.getByRole('textbox'), 'Hello World!');
        fireEvent.click(button);

        expect(spy).toHaveBeenCalledWith('Hello World!');
    })
})
