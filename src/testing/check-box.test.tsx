import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckBox from '@/components/check-box/check-box';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('CheckBoxコンポーネントのテスト', () => {
  test('チェックボックスが存在する', () => {
    render(<CheckBox prefCode={1} prefName="北海道" handleValueChange={() => {}} />);
    const checkBox = screen.getByRole('checkbox');
    expect(checkBox).toBeInTheDocument();
  });

  test('チェックボックスが選択されているかどうか', () => {
    render(<CheckBox prefCode={1} prefName="北海道" handleValueChange={() => {}} />);
    const checkBox = screen.getByRole('checkbox');
    expect(checkBox).not.toBeChecked();
  });

  test('チェックボックスの選択状態が変更される', async () => {
    const user = userEvent.setup();
    render(<CheckBox prefCode={1} prefName="北海道" handleValueChange={() => {}} />);
    const checkBox = screen.getByRole('checkbox');
    await user.click(checkBox);
    expect(checkBox).toBeChecked();
  });

  test('チェックボックスの選択状態が変更されたときにコールバック関数が呼ばれる', async () => {
    const mockFn = jest.fn();
    const user = userEvent.setup();
    render(<CheckBox prefCode={1} prefName="北海道" handleValueChange={mockFn} />);
    const checkBox = screen.getByRole('checkbox');
    await user.click(checkBox);
    expect(mockFn).toHaveBeenCalledWith(1, '北海道', true);
  });
});
