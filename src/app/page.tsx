import Prefecture from '@/features/prefecture/components/prefecture';
import Population from '@/features/population-graph/components/population';
import { useState } from 'react';

export default function App() {
  const [dataNumber, setDataNumber] = useState<number>(0);
  const [prefectures, setPrefectures] = useState([]);
  
  return (
    <>
      <Prefecture />
      <Population prefectures={prefectures} dataNumber={dataNumber} />
    </>
  );
}
