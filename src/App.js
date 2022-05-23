import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import FunWithAI from "./components/FunWithAI";


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
        <FunWithAI/>
        </QueryClientProvider>
      </div>
  );
}

export default App;
