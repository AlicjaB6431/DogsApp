import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { setAllBreeds } from '../helpers/dataTransform';

export const useListDogs = () => {
  return useQuery({
    queryKey: ['dogs'],
    queryFn: async () => {
      const { data } = await axios.get('https://dog.ceo/api/breeds/list/all');
      return setAllBreeds(data) as [string];
    },
  });
};
