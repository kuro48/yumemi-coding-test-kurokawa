'use client';

import CheckBox from '@/components/check-box/check-box';
import useGetPrefectureRequest from '../api/get-prefecture';

export type Props = {
  handleValueChange: (prefCode: number, prefName: string, isChecked: boolean) => void;
};

export default function Prefecture(props: Props) {
  const { data, error, isLoading } = useGetPrefectureRequest();

  if (isLoading) return <div>都道府県情報を取得中</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col justify-center p-4">
      <h1 className="text-center text-4xl font-bold mb-4 ">都道府県一覧</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
        {data?.result.map((prefecture) => (
          <CheckBox
            key={prefecture.prefCode}
            prefCode={prefecture.prefCode}
            prefName={prefecture.prefName}
            handleValueChange={props.handleValueChange}
          ></CheckBox>
        ))}
      </div>
    </div>
  );
}
