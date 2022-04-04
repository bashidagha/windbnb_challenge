import "./Navbarexpand.scss";
import { useSelector, useDispatch } from "react-redux";
import { changeCity, filterCity } from "../redux/citySlice";

const NavbarExpand = () => {
  const city = useSelector((state) => state.city.value.name);
  const dispatch = useDispatch();

  const LocationSVG = () => (
    <svg
      height="1.947rem"
      viewBox="0 0 24 24"
      width="1.4rem"
      fill="currentColor"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );

  return (
    <div className="navbar_expand w-100">
      <div className="select_boxs d-flex justify-content-around">
        <div>
          <div className="mb-4">
            <h5>LOCATION</h5>
            <h4>{city}, Finland</h4>
          </div>

          <p onClick={() => dispatch(changeCity("Helsinki"))}>
            <LocationSVG /> Helsinki, Finland
          </p>
          <p onClick={() => dispatch(changeCity("Turku"))}>
            <LocationSVG /> Turku, Finland
          </p>
          <p onClick={() => dispatch(changeCity("Oulu"))}>
            <LocationSVG /> Oulu, Finland
          </p>
          <p onClick={() => dispatch(changeCity("Vaasa"))}>
            <LocationSVG /> Vaasa, Finland
          </p>
        </div>

        <div>
          <h5>GUESTS</h5>
          <h4>Add guests</h4>
        </div>
      </div>

      <div className="btn_search" onClick={() => dispatch(filterCity(city))}>
        <svg viewBox="0 0 24 24" fill="currentColor" >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
        Search
      </div>
    </div>
  );
};

export default NavbarExpand;
