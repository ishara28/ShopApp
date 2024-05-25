import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import MyButton from '../../src/components/Button/MyButton';

describe('MyButton Component', () => {
  it('renders correctly', () => {
    const {getByText} = render(
      <MyButton text="Click Me" color="blue" action={() => {}} />,
    );
    const buttonElement = getByText('Click Me');
    expect(buttonElement).toBeTruthy();
  });

  it('calls the action when pressed', () => {
    const mockAction = jest.fn();
    const {getByText} = render(
      <MyButton text="Press Me" color="green" action={mockAction} />,
    );
    const buttonElement = getByText('Press Me');

    fireEvent.press(buttonElement);
    expect(mockAction).toHaveBeenCalledTimes(1);
  });
});
