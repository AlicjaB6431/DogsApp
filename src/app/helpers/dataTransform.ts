interface DataProps {
    message: {
      [breed: string]: string[];
    };
  }
  
  export const setAllBreeds: React.FC<DataProps> = (data) => {
    if (data.message) {
      const newBreeds: string[] = [];
      for (const breed in data.message) {
        if (data.message[breed] && data.message[breed].length !== 0) {
          for (const subBreed of data.message[breed]) {
            newBreeds.push(`${breed}/${subBreed}`);
          }
        } else {
          newBreeds.push(breed);
        }
      }
      return newBreeds;
    }
  };