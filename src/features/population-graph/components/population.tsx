'use client';

import { useEffect, useState } from 'react';
import useGetPopulationRequest, { GetPopulationResponse } from '../api/get-population';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

export type Prefectures = {
  prefCode: string;
  prefName: string;
};

export type Props = {
  prefectures: Prefectures[];
  dataNumber: number;
};

export type GraphData = {
  name: string;
  data: {
    value: number;
    year: number;
    rate?: number | undefined;
  }[];
};

export default function Population(props: Props) {
  const { error, isMutating, trigger } = useGetPopulationRequest();
  const [graphData, setGraphData] = useState<GraphData[]>([]);

  const fetchData = async () => {
    const dataPromises = props.prefectures.map(async (prefecture) => {
      const response = await trigger(prefecture.prefCode);
      return {
        name: prefecture.prefName,
        data: response.result.data[props.dataNumber].data,
      };
    });
    const results = await Promise.all(dataPromises);
    setGraphData(results);
  };

  useEffect(() => {
    fetchData();
    console.log(graphData);
  }, [props.prefectures, props.dataNumber]);

  const options =
    graphData.length > 0
      ? {
          title: {
            text: '人口の推移',
          },
          xAxis: {
            title: { text: '年' },
          },
          yAxis: {
            title: { text: '人' },
          },
          series: graphData.map((item) => ({
            type: 'line',
            name: item.name,
            data: item.data.map((data) => [data.year, data.value]),
          })),
        }
      : undefined;

  return (
    <>
      {isMutating && <div> グラフを準備中</div>}
      {error && <div>Error: {error.message}</div>}
      {graphData && <HighchartsReact highcharts={Highcharts} options={options} />}
    </>
  );
}
