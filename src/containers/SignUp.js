export default function SignUp() {
  return (
    <div className="container">
      <div className="row" style={{ justifyContent: 'center'}}>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Inscrivez-vous</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="signUpEmail">Adresse email</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="signUpEmail"
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
                    required
                  />
                </div>
                <p className="text-danger m-t">Validation</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
