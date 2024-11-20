import React from 'react';

export type Props = {
  prefCode: number;
  prefName: string;
  handleValueChange: (prefCode: number, prefName: string, isChecked: boolean) => void;
};

export default function CheckBox(props: Props) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    props.handleValueChange(props.prefCode, props.prefName, value);
  };

  return (
    <label className="p-2 flex align-center rounded-md bg-gray-300 justify-center">
      <input type="checkbox" className="w-4" onChange={handleInputChange} />
      <h2 className="mx-2 text-xl lg:text-base">{props.prefName}</h2>
    </label>
  );
}
