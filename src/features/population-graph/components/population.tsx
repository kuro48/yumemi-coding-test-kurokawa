"use client";

import useEffect from "react";
import useGetPopulationRequest from "../api/get-population";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

export type Props = {
  prefCode: string;
  prefName: string;
};

export default function Population(Props: Props) {
  // const [prefCode, setPrefCode] = useState<string>("");
  const { data, error, isLoading } = useGetPopulationRequest(Props.prefCode);

  const options: Highcharts.Options = {
    title: {
      text: "My chart",
    },
    series: [
      {
        type: "line",
        data: [1, 2, 3],
      },
    ],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
}
