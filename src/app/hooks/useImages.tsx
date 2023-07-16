import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

/**
 * Fetching dog images, cache set to 0 minutes
 * @returns Info About A Dog
 */

export const useImages = (breed: string, subbreed?: string) => {
  return useQuery({
    queryKey: ['pictures'],
    queryFn: async () => {
      let url = ` https://dog.ceo/api/breed/${breed}`;
      if (subbreed) {
        url += `/${subbreed}`;
      }
      url += '/images';
      const { data } = await axios.get(url);
      return data.message;
    },
    cacheTime: 0,
  });
};
