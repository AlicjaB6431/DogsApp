import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

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
  });
};
