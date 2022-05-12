import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';


describe('Home page renders without.', () => {
    it('should load a list of people from R and M', async () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
  
      //when you open the page you will find a loading state that says 
      

    });
  });