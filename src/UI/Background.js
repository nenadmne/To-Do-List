import { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Background.css";

const ModalOverlay = () => {
  return <main id="app" className="fire"></main>;
};

const portalElement = document.getElementById("background");

const Background = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay />,
        portalElement
      )}
    </Fragment>
  );
};

export default Background;
