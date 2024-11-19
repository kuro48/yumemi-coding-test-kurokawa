import axios from 'axios';
import useSWRMutation from 'swr/mutation';
import { z } from 'zod';

export const getPopulationResponseSchema = z.object({
  message: z.string().nullable(),
  result: z.object({
    boundaryYear: z.number(),
    data: z.array(
      z.object({
        label: z.string(),
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

export default function useGetPopulationRequest() {
  const baseURL = process.env.NEXT_PUBLIC_API_URL || '';
  const requestURL = baseURL + '/api/v1/population/composition/perYear';

  const fetcher = (url: string, { arg }: { arg: string }) => {
    return axios
      .get(url, {
        params: { prefCode: arg },
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          'X-API-KEY': '8FzX5qLmN3wRtKjH7vCyP9bGdEaU4sYpT6cMfZnJ',
        },
      })
      .then(async (response) => {
        const result = await response.data;
        return getPopulationResponseSchema.parse(result);
      })
      .catch((error) => {
        console.log('error:', error);
        throw error;
      });
  };

  const { error, isMutating, trigger } = useSWRMutation(requestURL, fetcher);

  return { error, isMutating, trigger };
}
