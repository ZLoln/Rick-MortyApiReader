import { render, screen } from '@testing-library/react';
import AllCharacters from '../components/OneCharacter';
import { MemoryRouter as Router } from 'react-router-dom';

beforeEach(()=>{
    render(
        <Router>
            <AllCharacters />
        </Router>
    );
})

test('get characterListImg', async () =>{
    const characterImg = await screen.findByRole('img');
    expect (characterImg).toBeInTheDocument();
    screen.debug();
})
