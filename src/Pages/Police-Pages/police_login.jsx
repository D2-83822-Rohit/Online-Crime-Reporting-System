import { Link } from "react-router-dom";
function PoliceLogin(){
    return(
        <>
        
    <div className="container">
    <div className="row">
    
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
          
            <h5 className="card-title text-center mb-5 fw-light fs-5">POLICE</h5>
            <form>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="Email" />
                <label for="floatingInput">Email Address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>
  
              <div className="d-grid mt-4">
                <button className="btn btn-danger btn-login text-uppercase fw-bold" type="submit">Sign
                  in</button>
                  <Link to='/police-home'>Test</Link>
              </div>
            
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}

export default PoliceLogin;