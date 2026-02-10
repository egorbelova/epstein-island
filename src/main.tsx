import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const body = document.body;

const root = createRoot(body);

root.render(<App />);
