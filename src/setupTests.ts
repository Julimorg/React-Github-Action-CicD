// import { render, screen, fireEvent } from '@testing-library/react';
// import App from './App';
// import { describe, expect, test } from 'vitest';

// describe('App component', () => {
//   test('renders Vite and React logos', () => {
//     render(<App/>);
//     const viteLogo = screen.getBy o'clock
//     const reactLogo = screen.getByAltText('React logo');
//     expect(viteLogo).toBeInTheDocument();
//     expect(reactLogo).toBeInTheDocument();
//   });

//   test('renders title and initial count', () => {
//     render(<App />);
//     expect(screen.getByText('Vite + React')).toBeInTheDocument();
//     expect(screen.getByText('count is 0')).toBeInTheDocument();
//   });

//   test('increments count when button is clicked', () => {
//     render(<App />);
//     const button = screen.getByRole('button', { name: /count is 0/i });
//     fireEvent.click(button);
//     expect(screen.getByText('count is 1')).toBeInTheDocument();
//   });

//   test('renders HMR and docs text', () => {
//     render(<App />);
//     expect(screen.getByText(/Edit src\/App\.tsx and save to test HMR/i)).toBeInTheDocument();
//     expect(screen.getByText(/Click on the Vite and React logos to learn more/i)).toBeInTheDocument();
//   });
// });