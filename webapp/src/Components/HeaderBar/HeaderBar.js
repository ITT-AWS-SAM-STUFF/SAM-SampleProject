import SeatSearch from './SeatSearch';
import CheckBoxes from './CheckBoxes';

const HeaderBar = () => {
  return (
    <header className="header-full">
      <SeatSearch />
      <CheckBoxes />
    </header>
  );
};

export default HeaderBar;
