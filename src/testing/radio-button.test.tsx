import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from '@/components/button/radio-button';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('RadioButtonコンポーネントのテスト', () => {
  test('ラジオボタンが4つ存在する', () => {
    render(<RadioButton handleValueChange={() => {}} />);
    const radioButtons = screen.getAllByRole('radio');
    expect(radioButtons).toHaveLength(4);
  });

  test('ラジオボタンが選択されているかどうか', () => {
    render(<RadioButton handleValueChange={() => {}} />);
    const radioButtons = screen.getAllByRole('radio');
    expect(radioButtons[0]).toBeChecked();
    expect(radioButtons[1]).not.toBeChecked();
    expect(radioButtons[2]).not.toBeChecked();
    expect(radioButtons[3]).not.toBeChecked();
  });

  test('ラジオボタンの選択状態が変更される', async () => {
    const user = userEvent.setup();
    render(<RadioButton handleValueChange={() => {}} />);
    const radioButtons = screen.getAllByRole('radio');
    await user.click(radioButtons[1]);
    expect(radioButtons[0]).not.toBeChecked();
    expect(radioButtons[1]).toBeChecked();
    expect(radioButtons[2]).not.toBeChecked();
    expect(radioButtons[3]).not.toBeChecked();
  });

  test('ラジオボタンの選択状態が変更されたときにコールバック関数が呼ばれる', async () => {
    const mockFn = jest.fn();
    const user = userEvent.setup();
    render(<RadioButton handleValueChange={mockFn} />);
    const radioButtons = screen.getAllByRole('radio');
    await user.click(radioButtons[1]);
    expect(mockFn).toHaveBeenCalledWith(1);
  });
});
