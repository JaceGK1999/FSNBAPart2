import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

describe('Home page renders without.', () => {
  it('should load a list of people from R and M', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    //when you open the page you will find a loading state that says "Loading... Hopefully you dont have to look at this for to long...""
    const loading = screen.getByText(
      'Loading... Hopefully you dont have to look at this for to long...'
    );
    expect(loading).toBeInTheDocument();

    // after the page loads you will see a list of people from rick and morty
    const Character = await screen.findByText(
      'Name: Abadango Cluster Princess (Alive)'
    );
    expect(Character).toBeInTheDocument();
  });
  it('should navigate to Morty Smith', async () => {
    render(
      <MemoryRouter initialEntries={['/2']}>
        <App />
      </MemoryRouter>
    );

    //when you open the page you will find a loading state that says "Loading... Hopefully you dont have to look at this for to long...""
    const loading = screen.getByText(
      'Loading... Hopefully you dont have to look at this for to long...'
    );
    expect(loading).toBeInTheDocument();

    // after the page loads you will see a list of people from rick and morty
    const Character = await screen.findByText(
      'Name: Abadango Cluster Princess (Alive)'
    );
  });
});
