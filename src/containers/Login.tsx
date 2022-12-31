import { useRef, MutableRefObject, FormEvent } from "react";
import { login } from "../ducks/users/reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";

export default function Login() {
  const isLoading = useSelector((state: RootState) => state.users.isLoading);
  const error = useSelector((state: RootState) => state.users.error.message);
  const emprtArray: HTMLInputElement[] = [];
  const inputs = useRef<HTMLInputElement[]>(emprtArray);
  const formRef = useRef(null);
  const dispatch = useDispatch();

  const addinputs = (el: HTMLInputElement) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
              <form onSubmit={handleSubmit} ref={formRef}>
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
                {error && <p className="text-danger m-t">{error}</p>}
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isLoading}
                >
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
