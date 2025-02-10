import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar'; 


it('should render the correct text in the navigation bar', () => {
    render(<Navbar />)

    const aboutElem = screen.getByText('About');
    const homeElem = screen.getByText('Home');
    const projectsElem = screen.getByText('Projects');
    const contactElem = screen.getByText('Contact');

    
    expect(aboutElem).toBeInTheDocument(); 
    expect(homeElem).toBeInTheDocument(); 
    expect(projectsElem).toBeInTheDocument(); 
    expect(contactElem).toBeInTheDocument(); 

})