import React from "react";
import ReactDOM from "react-dom";

import style from "./loginModel.module.css";

const LogInModel = () => {
  return (
    <div
      className={`${style.overlay} flex justify-content-center align-items-aligncenter`}
    >
      <section data-testid="login-model" className={`${style.login__form} p-3`}>
        <form>
          <fieldset
            className={`${style.login__form__fieldset} flex justify-content-center flex-direction-rowcolumn`}
          >
            <legend className={`${style.login__form__legend} pb-3`}>
              Log in
            </legend>
            <div className="flex justify-content-center flex-direction-rowcolumn pb-2 text-center">
              <label className="pb-1">User Name</label>
              <input className="col-sm-12 p-1" type="text" />
            </div>
            <div className="flex justify-content-center flex-direction-rowcolumn pb-2 text-center">
              <label className="pb-1">Password</label>
              <input className="col-sm-12 p-1" type="password" />
            </div>
          </fieldset>
        </form>
        <div>
          <button>Submit</button>
        </div>
      </section>
    </div>
  );
};

const RenderLogInModel = () => {
  console.log(document.getElementById("login-model"));
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <LogInModel />,
        document.getElementById("login-model")
      )}
    </React.Fragment>
  );
};

export default RenderLogInModel;
