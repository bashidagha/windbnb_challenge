import "./Navbarexpand.scss";
import { useSelector, useDispatch } from 'react-redux'
import { changeCity } from '../redux/citySlice'


const NavbarExpand = () => {

  const city = useSelector((state) => state.city.value)
  const dispatch = useDispatch()

  return (
    <div className="nabar_expand w-100">
      <div className="select_boxs d-flex justify-content-around">
        <div>
          <div>
            <h5>LOCATION</h5>
            <h4>{city}, Finland</h4>
          </div>

            <p onClick={() => dispatch(changeCity("Helsinki"))}>Helsinki, Finland</p>
            <p onClick={() => dispatch(changeCity("Turku"))}>Turku, Finland</p>
            <p onClick={() => dispatch(changeCity("Oulu"))}>Oulu, Finland</p>
            <p onClick={() => dispatch(changeCity("Vaasa"))}>Vaasa, Finland</p>
        </div>

        <div>
          <h5>GUESTS</h5>
          <h4>Add guests</h4>
        </div>
      </div>
    </div>
  );
};

export default NavbarExpand;
