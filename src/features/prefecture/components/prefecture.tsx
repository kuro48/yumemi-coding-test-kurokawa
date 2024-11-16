'use client';

import CheckBox from '@/components/check-box/check-box';
import useGetPrefectureRequest from '../api/get-prefecture';

export default function Prefecture() {
  const { data, error, isLoading } = useGetPrefectureRequest();

  return (
    <>
      {isLoading && <div>都道府県情報を取得中</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div className="flex flex-col justify-center p-4">
          <h1 className="text-center text-4xl font-bold mb-4 ">都道府県一覧</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
            {data.result.map((prefecture) => (
              <CheckBox key={prefecture.prefCode} prefName={prefecture.prefName}></CheckBox>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
