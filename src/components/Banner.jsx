import logo from '../assets/GloboLogo.png';

const Banner = ({children}) => {
  return (
    <header className="row mb-4">
      <div className="col-5">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="subtitle col-7 mt-5">{children}</div>
    </header>
  );
}

export default Banner;