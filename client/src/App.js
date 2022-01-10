import { Suspense } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { ContextProvider } from './contexts/Context';
import Navbar from './components/Navbar';
import routes from './routes'
import Spinner from './components/Spinner';

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <ContextProvider>
      <Router>
        <header className="h-20 flex items-center mb-4">
          <Navbar />
        </header>

        <section>
          <Suspense fallback={<Spinner />}>
            <Routes>
              {routes.map((route, idx) => {
                return (
                  route.component && (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      element={<route.component/>}
                    />
                  )
                )
              })}
            </Routes>
          </Suspense>
        </section>
      </Router>
    </ContextProvider>
    </div>
  );
}

export default App;
