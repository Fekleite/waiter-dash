import { BrowserRouter } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { Router } from './router';

export function App() {
  return (
    <BrowserRouter>
      <Router />

      <ToastContainer position="bottom-center" />
    </BrowserRouter>
  );
}
