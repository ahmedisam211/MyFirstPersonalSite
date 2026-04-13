import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import Home from './pages/Home';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import PoemsPage from './pages/PoemsPage';
import PoemDetail from './pages/PoemDetail';
import ComingSoon from './pages/ComingSoon';


function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router >
        <Routes>
           <Route path="/" element={<ComingSoon />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/poems" element={<PoemsPage />} />
          <Route path="/poems/:id" element={<PoemDetail />} />
        </Routes>
      </Router>
      <Toaster />
      <SpeedInsights />
      <Analytics/>
    </QueryClientProvider>
  )
}

export default App
//basename="/MyFirstPersonalSite"