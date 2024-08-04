import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/User-Services/user';
import { toast } from 'react-toastify';

function LoginUser() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const onLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // client-side validation
    if (email.length === 0) {
      toast.warning('Enter email');
    } else if (password.length === 0) {
      toast.warning('Enter password');
    } else if (!isValidEmail(email)) {
      toast.warning('Email is not valid');
    } else {
      try {
        const result = await login({ email, password });
        if (result) {
          // Store user details in sessionStorage
          sessionStorage.setItem('user', JSON.stringify(result));
          sessionStorage.setItem('id', JSON.stringify(result.id));
          sessionStorage.setItem('userName', JSON.stringify(result.userName));
          toast.success('Welcome to the application');
          navigate('/home');
        } else {
          toast.error('Invalid email or password');
        }
      } catch (error) {
        toast.error('An error occurred during login');
      }
    }
  };

  // Simple email validation function
  const isValidEmail = (email) => {
    // Use a regex pattern for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">USER</h5>
                <form>
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Email"
                      value={email}
                    />
                    <label htmlFor="floatingInput">Email Address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      value={password}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>

                  <div className="mb-3 mt-4">
                    Don't have an account yet?{' '}
                    <Link to="/register">Register here</Link>
                    <br />
                    <Link to="/home">Test</Link>
                  </div>
                  <div className="d-grid mt-2">
                    <button
                      onClick={onLogin}
                      className="btn btn-success btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginUser;
