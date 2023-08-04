import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Bored} from "./components/Bored";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <main className="container">
              <Header />
              <Bored />
              <Footer />
          </main>
      </QueryClientProvider>
  );
}

export default App;
