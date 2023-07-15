import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PagintionProps {
  totalBreeds: number;
  breedsPerPage: number;
  containerRef: React.RefObject<HTMLDivElement>;
  setCurrentBreed: (data: number) => void;
}

const PaginationComponent: React.FC<PagintionProps> = ({
  totalBreeds,
  breedsPerPage,
  setCurrentBreed,
  containerRef,
}) => {
  const pageCount = Math.ceil(totalBreeds /  breedsPerPage);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentBreed(page);
    containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Stack justifyContent='center' alignItems='center' display='flex'>
      <Pagination
        count={pageCount}
        onChange={handlePageChange}
        sx={{
          width: '100%',
          '& .MuiPaginationItem-root': {
            fontSize: '30px',
            marginBottom: '30px',
          },
        }}
      />
    </Stack>
  );
};

export default PaginationComponent;
