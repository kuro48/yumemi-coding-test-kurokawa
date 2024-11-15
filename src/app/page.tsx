import Prefecture from '@/features/prefecture/components/prefecture';
import Population from '@/features/population-graph/components/population';

export default function App() {
  return (
    <>
      <Prefecture />
      <Population prefCode='1' />
    </>
  );
}
