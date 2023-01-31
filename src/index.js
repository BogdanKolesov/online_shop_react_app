import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import GlobalTheme from "./themes/GlobalTheme";
import Home from './components/views/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <GlobalTheme /> */}
      <App />
      <Routes>
        <Route path="/" element={<Home />} >
          {/* <Route path="rooms" element={<RoomsPage />} />
          <Route path="lights" element={<LightsPage />} />
          <Route path="cameras" element={<CamerasPage />} />
          <Route path="weather" element={<WeatherPage />} />
          <Route path="settings" element={<Settings />} /> */}
        </Route>
        {/* <Route path="/error" index element={<Error />} />
        <Route path="/settings" index element={<Settings />} />
        <Route path="/rooms/:id" element={<Room />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


