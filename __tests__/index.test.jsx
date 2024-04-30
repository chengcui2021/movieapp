import { render } from '@testing-library/react';
import UpcomingMovies from '../components/UpcomingMovies';

describe('Upcoming Movies', () => {
  it('should upcoming movies render correctly', () => {
    const { container } = render(<UpcomingMovies />);
    const UpcomingMovie = container.querySelectorAll('.my-20');
    expect(UpcomingMovie.length).toEqual(1);
  });
});
