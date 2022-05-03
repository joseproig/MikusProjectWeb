import './App.css';
import { QueryClientProvider, QueryClient, useQuery } from 'react-query';
import Elements from './components/elements'
import { obtainAPIToken } from "./components/logic/rest-api-communication";

function App() {
  const queryClient = new QueryClient ();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Elements></Elements>
      </div>
    </QueryClientProvider>
  );
}

export default App;
