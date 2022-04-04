import "./Navbarexpand.scss";
import {useState} from 'react'

const NavbarExpand = () => {

    const [city,setCity] = useState("Helsinki");

  return (
    <div className="nabar_expand w-100">
      <div className="select_boxs d-flex justify-content-around">
        <div>
          <div>
            <h5>LOCATION</h5>
            <h4>{city}, Finland</h4>
          </div>

            <p onClick={()=>setCity("Helsinki")}>Helsinki, Finland</p>
            <p onClick={()=>setCity("Turku")}>Turku, Finland</p>
            <p onClick={()=>setCity("Oulu")}>Oulu, Finland</p>
            <p onClick={()=>setCity("Vaasa")}>Vaasa, Finland</p>

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
