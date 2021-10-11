import SeatSearch from './SeatSearch';
import CheckBoxes from './CheckBoxes';

const HeaderBar = () => {
  return (
    <header className="header-full">
      <h1
        style={{
          fontSize: '3rem',
          textDecoration: 'underline',
          textDecorationColor: 'orange',
        }}
      >
        ITT Seating Chart
      </h1>
      <CheckBoxes />
      <SeatSearch />
    </header>
  );
};

export default HeaderBar;
