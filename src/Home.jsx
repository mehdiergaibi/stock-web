import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./config/firebase.config";
import { useDispatch } from "react-redux";
import "./home.css";
import { setUser } from "./state/usersSlice";
import { RiExternalLinkFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch;

  const SignOut = (e) => {
    e.preventDefault();
    if (confirm("are sure? ")) {
      signOut(auth)
        .then(() => {
          dispatch(setUser(null));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="home">
      <div className="home-compos">
        <button className="log-out-btn" onClick={SignOut}>
          Log out
        </button>
        <div className="info">
          <p>
            {0} products {0} Dhs
          </p>
          <p>
            {0} sale {0} Dhs{" "}
          </p>
        </div>
      </div>
      <ActionProductCompo path={"add-product"} title={"add a product"} />
      <ActionProductCompo path={"edit-product"} title={"edit a product"} />
      <ActionProductCompo path={"view-sell-product"} title={"view or sell a product"} />
      <ActionProductCompo path={"add-customer"} title={"add customer"} />
      <ActionProductCompo path={"take-notes"} title={"take notes"} />


    </div>
  );
}

const ActionProductCompo = ({title, path}) => {
  return (
    <div className="products-actions">
        <div className="add-edit">
          <h3>{title}</h3>
          <button>
            <Link to={`/${path}`} >
            <RiExternalLinkFill className="go-icon" />
            </Link>
          </button>
        </div>
      </div>
  );
}

export default Home;
