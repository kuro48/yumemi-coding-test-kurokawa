"use client";

import useGetPrefectureRequest from "../api/get-prefecture";

export default function Prefecture() {
  const { data, error, isLoading } = useGetPrefectureRequest();

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <ul>
          {data.result.map((prefecture) => (
            <li key={prefecture.prefCode}>{prefecture.prefName}</li>
          ))}
        </ul>
      )}
    </>
  );
}
