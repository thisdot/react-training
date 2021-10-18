import { fireEvent } from "@testing-library/dom";
import { cleanup, render } from "@testing-library/react";
import Search from './Search';

afterEach(cleanup);

describe('When Search is clicked', () => {
  it('triggers its callback when search is clicked', () => {
    const onSearch = jest.fn();
    const { getByText } = render(<Search onSearch={onSearch} />);

    fireEvent.click(getByText(/search/i));

    expect(onSearch).toHaveBeenCalled();
  });

  it('triggers its callback with the right value when search is clicked', () => {
    const onSearch = jest.fn();
    const { getByTestId, getByText } = render(<Search onSearch={onSearch} />);
    
    const input = getByTestId('username');

    fireEvent.change(input, { target: { value: "coryh" } });
    fireEvent.click(getByText(/search/i));

    expect(onSearch).toHaveBeenCalled();
    expect(onSearch).toHaveBeenCalledWith('coryh');
  });  
});