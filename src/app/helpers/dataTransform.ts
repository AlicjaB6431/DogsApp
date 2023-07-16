interface DataProps {
  message: {
    [breed: string]: string[];
  };
}
/**
 * Extracts all dog breeds from the given data object.
 * If sub-breeds are present, they are included in the format `breed/sub-breed`.
 * @returns An array of all dog breeds
 */

export const setAllBreeds = (data: DataProps) => {
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
