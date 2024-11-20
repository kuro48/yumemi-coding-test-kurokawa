import React, { useState } from 'react';

export type Props = {
  handleValueChange: (value: number) => void;
};

export default function RadioButton(props: Props) {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(Number(event.target.value));
    props.handleValueChange(Number(event.target.value));
  };

  return (
    <div className="text-center mb-4">
      <h3 className="text-2xl font-bol mb-4">表示するデータを切り替え</h3>
      <label className="p-3 rounded-md bg-gray-300 mx-2 text-lg">
        <input type="radio" value={0} checked={selectedOption === 0} onChange={handleChange} />
        総人口
      </label>
      <label className="p-3 rounded-md bg-gray-300 mx-2 text-lg">
        <input type="radio" value={1} checked={selectedOption === 1} onChange={handleChange} />
        年少人口
      </label>
      <label className="p-3 rounded-md bg-gray-300 mx-2 text-lg">
        <input type="radio" value={2} checked={selectedOption === 2} onChange={handleChange} />
        生産年齢人口
      </label>
      <label className="p-3 rounded-md bg-gray-300 mx-2 text-lg">
        <input type="radio" value={3} checked={selectedOption === 3} onChange={handleChange} />
        老年人口
      </label>
    </div>
  );
}
