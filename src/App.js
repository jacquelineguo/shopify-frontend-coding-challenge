import logo from './logo.svg';
import './App.css';
import Row from 'react-bootstrap/Row';
import {Container, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import ResponseCard from "./components/responseCard";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  const GetCompletions = () => {
    console.log("clicked");
  }

  return (
      <div>
        <QueryClientProvider client={queryClient}>
        <ResponseCard/>
        </QueryClientProvider>
      </div>
  );
}

export default App;
