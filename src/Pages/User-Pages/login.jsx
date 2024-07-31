import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../services/User-Services/user'
import { toast } from 'react-toastify'
// import { useDispatch } from 'react-redux'
// import { loginAction } from '../features/userSlice'

function LoginUser() {
  // create state members
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // get the navigate object
  const navigate = useNavigate()

  // use dispatch to update global state
  // const dispatch = useDispatch()

  const onLogin = async () => {
    // client side validation
    if (email.length === 0) {
      toast.warning('enter email')
    } else if (password.length === 0) {
      toast.warning('enter password')
    } else {
      const result = await login(email, password)
      if (result['status'] === 'success') {
        // read the token
        // const token = result['data']['token']
        // const name = result['data']['name']
        const { token, name } = result['data']

        // set the data in session storage
        // sessionStorage.token = token
        // sessionStorage.name = name

        // sessionStorage['token'] = token
        // sessionStorage['name'] = name

        sessionStorage.setItem('token', token)
        sessionStorage.setItem('name', name)

        // set the login status to true
        // dispatch(loginAction())

        toast.success('welcome to the application')
        navigate('/home')
      } else {
        toast.error('invalid email or password')
      }
    }
  }

  return (
    <div>
    {/* <MainNavBar/> */}
      {/* <h2 className='page-title'>Login</h2>

      <div className='row'>
        <div className='col'></div>

        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>Email</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type='email'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                type='password'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <div>
                Dont have an account yet?{' '}
                <Link to='/register'>Register here</Link>
              </div>
              <button onClick={onLogin} className='mt-2 btn btn-success'>
                Login
              </button>
            </div>
          </div>
        </div>

        <div className='col'></div>
      </div> */}
      <div className="container">
    <div className="row">
    
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
          
            <h5 className="card-title text-center mb-5 fw-light fs-5">USER</h5>
            <form>
              <div className="form-floating mb-3">
                <input onChange={(e) => {
                  setEmail(e.target.value)
                }} type="email" className="form-control" id="floatingInput" placeholder="Email" />
                <label htmlFor="floatingInput">Email Address</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={(e) => {
                  setPassword(e.target.value)
                }} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <div className='mb-3 mt-4'>
                Dont have an account yet?{' '}
                <Link to='/register'>Register here</Link>
                <br/>
                <Link to='/home'>Test</Link>
              </div>
              <div className="d-grid mt-2">
                <button onClick={onLogin} className="btn btn-success btn-login text-uppercase fw-bold" type="submit">Sign
                  in</button>
              </div>
            
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default LoginUser
