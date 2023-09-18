// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link, Navigate, Route, Routes } from 'react-router-dom';

import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import { useEffect } from 'react';

export function App() {
  useEffect(() => {
    window.addEventListener('logout', (e: any) => {
      console.log('logout from react', e.detail);
    });
  }, []);

  const handleLogout = () => {
    const event = new CustomEvent('logout', {
      detail: {},
      bubbles: true,
      cancelable: true,
      composed: false,
    });

    window.dispatchEvent(event);
  };

  return (
    <>
      <ul>
        <li>
          <a href="/">Angular Page One</a>
        </li>
        <li>
          <a href="/page-two">Angular Page Two</a>
        </li>

        <li>
          <Link to="/react-page-one">React Page One</Link>
        </li>
        <li>
          <Link to="/react-page-two">React Page Two</Link>
        </li>
        {/* <li>
          <button onClick={handleLogout}>Logout</button>
        </li> */}
      </ul>
      <div>
        <Routes>
          <Route path="/react-page-one" element={<PageOne />}></Route>
          <Route path="/react-page-two" element={<PageTwo />}></Route>
          <Route
            path="/react"
            element={<Navigate to="/react-page-one" />}
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
