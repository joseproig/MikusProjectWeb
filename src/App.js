import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import Elements from './components/elements'


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
