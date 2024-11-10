import axios from "axios";
import { useCallback, useState } from "react";
import useSWR from "swr";
import { z } from "zod";

export const getPopulationResponseSchema = z.object({
  message: z.string().nullable(),
  result: z.object({
    boundaryYear: z.number(),
    data: z.array(
      z.object({
        data: z.array(
          z.object({
            year: z.number(),
            value: z.number(),
            rate: z.number().optional(),
          })
        ),
      })
    ),
  }),
});

export type GetPopulationResponse = z.infer<typeof getPopulationResponseSchema>;

export default function useGetPopulationRequest(prefCode: string) {
  const baseURL = process.env.NEXT_PUBLIC_API_URL || "";
  const requestURL = baseURL + "/api/v1/population/composition/perYear";
  // const [prefCode, setPrefCode] = useState<string>("");

  const fetcher = useCallback(() => {
    console.log("url:", requestURL);
    return axios
      .get(requestURL, {
        params: { prefCode: prefCode },
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "X-API-KEY": "8FzX5qLmN3wRtKjH7vCyP9bGdEaU4sYpT6cMfZnJ",
        },
      })
      .then(async (response) => {
        const result = await response.data;
        return getPopulationResponseSchema.parse(result);
      })
      .catch((error) => {
        console.log("error:", error);
        throw error;
      });
  }, [requestURL, prefCode]);

  const { data, error, isLoading } = useSWR<GetPopulationResponse>(
    requestURL,
    fetcher
  );

  return { data, error, isLoading };
}
