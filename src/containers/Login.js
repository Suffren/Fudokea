import { useRef } from "react";
import { login } from "../ducks/users/UsersReducer";
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
  const isLoading = useSelector((state) => state.users.isLoading);
  const inputs = useRef([]);
  const dispatch = useDispatch();

  const addinputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };
  const formRef = useRef();

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email: inputs.current[0].value,
        password: inputs.current[1].value,
      })
    );
  };

  return (
    <div className="container">
      <div className="row" style={{ justifyContent: "center" }}>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Inscrivez-vous</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleForm} ref={formRef}>
                <div className="form-group mb-3">
                  <label htmlFor="loginEmail">Adresse email</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="loginEmail"
                    ref={addinputs}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="loginPassword">Mot de passe</label>
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    id="loginPassword"
                    ref={addinputs}
                    required
                  />
                </div>
                <p className="text-danger m-t">Validation</p>
                <button type="submit" className="btn btn-primary">
                  Se connecter
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
