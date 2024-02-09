import { RouteApp } from './routes';
import './App.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "font-awesome/css/font-awesome.css";
import CarrinhoContextProvider from './hooks/CarrinhoContext';

function App() {
  return (
    <>
      <CarrinhoContextProvider>
        <ToastContainer />
        <RouteApp />
      </CarrinhoContextProvider>

    </>

  );
}

export default App;
