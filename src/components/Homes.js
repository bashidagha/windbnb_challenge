import "./Homes.scss";
import { useSelector, useDispatch } from "react-redux";

const Homes = ({ homes }) => {

  const filteredCities = useSelector((state) => state.city.value.filterValue);


  return (
    <div className="d-flex flex-wrap justify-content-between">
      {homes ? (
        homes.filter((home)=> home.city !== filteredCities).map((home) => (
          <div className="stay_items" key={home.title}>
            <img src={home.photo} alt="Home Photo"></img>
            <div className="d-flex">
              <div>{home.type}</div>
              <p className="float-right m-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                {home.rating}
              </p>
            </div>
            <h3>{home.title}</h3>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Homes;
