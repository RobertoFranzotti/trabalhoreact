import { useState, useEffect } from 'react';
import './Header.css';
import logoImage from '../../assets/parnaso.jpg';
import { Link } from 'react-router-dom';

function Header() {
  const [weatherIcon, setWeatherIcon] = useState('');
  const [weatherDescription, setWeatherDescription] = useState('');

  useEffect(() => {
    fetchWeatherData();
  }, []);

  async function fetchWeatherData() {
    const apiKey = 'f2961cb81b38117f7839daff14cafe40';
    const city = 'Petrópolis';
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    const data = await response.json();

    const icon = data.weather[0].icon;
    const description = data.weather[0].description;

    setWeatherIcon(icon);
    setWeatherDescription(description);
  }

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logoImage} alt="Logo" />
        </Link>
      </div>

      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/form" className="button">
              <span>Agendar</span>
            </Link>
          </li>
          <li>
            <Link to="/details" className="button">
              <span>Atrações</span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="button">
              <span>Sobre</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="weather">
        <span>
          <img
            src={`http://openweathermap.org/img/wn/${weatherIcon}.png`}
            alt="Weather Icon"
          />
        </span>
        <span>{weatherDescription}</span>
      </div>
    </header>
  );
  
}

export default Header;
