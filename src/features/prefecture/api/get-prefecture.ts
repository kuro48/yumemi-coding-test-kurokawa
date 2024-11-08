import axios from "axios";
import { useCallback } from "react";
import useSWR from "swr";
import { z } from "zod";

export const getPrefectureResponseSchema = z.object({
  message: z.string().nullable(),
  result: z.array(
    z.object({
      prefCode: z.number(),
      prefName: z.string(),
    })
  ),
});

export type GetPrefectureResponse = z.infer<typeof getPrefectureResponseSchema>;

export default function useGetPrefectureRequest() {
  const baseURL = process.env.NEXT_PUBLIC_API_URL || "";
  const requestURL = baseURL + "/api/v1/prefectures";

  const fetcher = useCallback(() => {
    console.log("url:", requestURL);
    return axios
      .get(requestURL, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "X-API-KEY": "8FzX5qLmN3wRtKjH7vCyP9bGdEaU4sYpT6cMfZnJ",
        },
      })
      .then(async (response) => {
        const result = await response.data;
        return getPrefectureResponseSchema.parse(result);
      })
      .catch((error) => {
        throw error;
      });
  }, [requestURL]);

  const { data, error, isLoading } = useSWR<GetPrefectureResponse>(
    requestURL,
    fetcher
  );

  return { data, error, isLoading };
}
