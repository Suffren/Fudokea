import { useRef, useState, useEffect } from "react";
import { signUp } from "../ducks/users/reducer";
import { useSelector, useDispatch } from "react-redux";

export default function SignUp() {
  const isLoading = useSelector((state) => state.users.isLoading);
  const storedError = useSelector((state) => state.users.error);
  const [error, setError] = useState();
  const inputs = useRef([]);
  const formRef = useRef();
  const dispatch = useDispatch();

  const addinputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  useEffect(() => {
    if (storedError) setError(storedError);
  }, [storedError]);

  const handleForm = (e) => {
    e.preventDefault();
    if (inputs.current[1].value !== inputs.current[2].value) {
      setError("Les mots de passe doivent être identiques");
    } else {
      dispatch(
        signUp({
          email: inputs.current[0].value,
          password: inputs.current[1].value,
        })
      );
    }
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
                  <label htmlFor="signUpEmail">Adresse email</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="signUpEmail"
                    ref={addinputs}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="signUpPassword">Mot de passe</label>
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    id="signUpPassword"
                    ref={addinputs}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="repeatPassword">
                    Répétez le mot de passe
                  </label>
                  <input
                    name="repeatPassword"
                    type="password"
                    className="form-control"
                    id="repeatPassword"
                    ref={addinputs}
                    required
                  />
                </div>
                {error && <p className="text-danger m-t">{error}</p>}
                <button type="submit" className="btn btn-primary">
                  S'inscrire
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
