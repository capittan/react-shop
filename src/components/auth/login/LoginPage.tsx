const LoginPage = () => {
    return(
        <>
            <div className="text-center m-5">
                <img className="m-5 w-25" src="https://carloscueto.edu.pe/login/img/user.png"></img>
                <h1 className="text-center">Log In</h1>

                <form className="col-lg-6 offset-lg-3">
                    <div className="form-outline mb-4">
                        <input type="email" id="form2Example1" className="form-control" />
                        <label className="form-label" htmlFor="form2Example1">Email address</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" id="form2Example2" className="form-control" />
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                    </div>

                    <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                        
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                        </div>
                        </div>

                        <div className="col">
                        
                        <a href="#!">Forgot password?</a>
                        </div>
                    </div>

                    <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

                    <div className="text-center">
                        <p>Not a member? <a href="#!">Register</a></p>
                        <p>or sign up with:</p>
                        <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                        </button>
                    </div>
                    </form>
            </div>
        </>
    );
}
export default LoginPage;