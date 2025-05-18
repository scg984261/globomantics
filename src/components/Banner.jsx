import { useContext } from 'react';
import navigationContext from '../navigation/navigationContext';
import logo from '../assets/GloboLogo.png';
import navValues from '../navigation/navValues';
import { useNavigate } from 'react-router';

const Banner = ({children}) => {
  const navigate = useNavigate();
  return (
    <header className="row mb-4">
      <div className="col-5">
        <img className="logo" onClick={() => navigate("/")} src={logo} alt="logo" />
      </div>
      <div className="subtitle col-7 mt-5">{children}</div>
    </header>
  );
}

export default Banner;