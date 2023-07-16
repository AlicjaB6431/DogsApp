import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { setAllBreeds } from '../helpers/dataTransform';

/**
 * Fetching dog list, cache set to 1 minute
 * @returns List of all dogs
 */

export const useListDogs = () => {
  return useQuery({
    queryKey: ['dogs'],
    queryFn: async () => {
      const { data } = await axios.get('https://dog.ceo/api/breeds/list/all');
      return setAllBreeds(data) as [string];
    },
    cacheTime: 1 * (60 * 1000),
  });
};
