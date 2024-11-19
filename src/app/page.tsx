'use client';

import Prefecture from '@/features/prefecture/components/prefecture';
import Population from '@/features/population-graph/components/population';
import { useState } from 'react';
import RadioButton from '@/components/button/radio-button';

export default function App() {
  const [dataNumber, setDataNumber] = useState<number>(0);
  const [prefectures, setPrefectures] = useState<{ prefCode: number; prefName: string }[]>([]);

  const handlePrefectureChange = (prefCode: number, prefName: string, isChecked: boolean) => {
    setPrefectures((prev) =>
      isChecked ? [...prev, { prefCode, prefName }] : prev.filter((p) => p.prefCode !== prefCode)
    );
  };

  const handleDataNumberChange = (value: number) => {
    setDataNumber(value);
  };

  return (
    <>
      <Prefecture handleValueChange={handlePrefectureChange} />
      <RadioButton handleValueChange={handleDataNumberChange}></RadioButton>
      <Population prefectures={prefectures} dataNumber={dataNumber} />
    </>
  );
}
