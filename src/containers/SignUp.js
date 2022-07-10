import { useRef, useState } from "react";

export default function SignUp() {
  const inputs = useRef([])

  const addinputs = el => {
    if(el && !inputs.current.includes(el)) {
      inputs.current.push(el)
    }
  }

  const handleForm = e => {
    e.preventDefault()
  }

  return (
    <div className="container">
      <div className="row" style={{ justifyContent: 'center'}}>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Inscrivez-vous</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleForm}>
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
                    type="type"
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
                    type="type"
                    className="form-control"
                    id="repeatPassword"
                    ref={addinputs}
                    required
                  />
                </div>
                <p className="text-danger m-t">Validation</p>
                <button type="submit" class="btn btn-primary">Valider</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
