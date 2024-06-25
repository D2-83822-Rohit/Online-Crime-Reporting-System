import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../../services/user'
import { toast } from 'react-toastify'

function RegisterUser() {
  // create state members
  const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // get a hook to navigate
  // - navigate is referring a function which is used for navigation
  const navigate = useNavigate()

  const onCancel = () => {
    navigate('/')
  }

  const isValidEmail = () => {
    return email.includes('@')
  }

  const onRegister = async () => {
    console.log('onRegister')

    // client side validation
    if (firstName.length === 0) {
      toast.warning('enter first name')
    // } else if (lastName.length === 0) {
      // toast.warning('enter last name')
    } else if (email.length === 0) {
      toast.warning('enter email')
    } else if (!isValidEmail()) {
      toast.warning('Email is not valid')
    } else if (password.length === 0) {
      toast.warning('enter password')
    } else if (confirmPassword.length === 0) {
      toast.warning('confirm password')
    } else if (password !== confirmPassword) {
      toast.warning('password does not match')
    } else {
      // make the API call and receive the result
      const result = await register(firstName, email, phone, password)
      if (result['status'] === 'success') {
        toast.success('successfully registered a user')
        navigate('/login')
      } else {
        toast.error('Failed to register the user')
      }
    }
  }

  return (
    <div>
    <div className="container">
    <div className="row">
    
      <div className="col-sm-10 col-md-10 col-lg-10 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
      <h2 className='page-title'>Register</h2>

      <div className='row mt-5'>
        <div className='col-1 mx-auto'></div>

        <div className='col mx-auto'>
          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Name</label>
                <input
                  onChange={(e) => {
                    setFirstName(e.target.value)
                  }}
                  type='text'
                  className='form-control'
                />
              </div>
            </div>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Adhar Card Number</label>
                <input
                  // onChange={(e) => {
                  //   setConfirmPassword(e.target.value)
                  // }}
                  type='number'
                  className='form-control'
                />
              </div>
            </div>

          </div>

          <div className='row'>
            <div className='col'>
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
            </div>

            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Phone Number</label>
                <input
                  onChange={(e) => {
                    setPhone(e.target.value)
                  }}
                  type='tel'
                  className='form-control'
                />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Address Line 1</label>
                <input
                  // onChange={(e) => {
                  //   setFirstName(e.target.value)
                  // }}
                  type='text'
                  className='form-control'
                />
              </div>
            </div>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Address Line 2</label>
                <input
                  // onChange={(e) => {
                  //   setConfirmPassword(e.target.value)
                  // }}
                  type='text'
                  className='form-control'
                />
              </div>
            </div>

          </div>

          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>State</label>
                <input
                  // onChange={(e) => {
                  //   setFirstName(e.target.value)
                  // }}
                  type='text'
                  className='form-control'
                />
              </div>
            </div>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor='City'>City</label>
                <input
                  // onChange={(e) => {
                  //   setConfirmPassword(e.target.value)
                  // }}
                  type='text'
                  className='form-control'
                />
              </div>
            </div>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor='Pin Code'>Pin code</label>
                <input
                  // onChange={(e) => {
                  //   setConfirmPassword(e.target.value)
                  // }}
                  type='text'
                  className='form-control'
                />
              </div>
            </div>

          </div>

          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor='password'>Password</label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  type='password'
                  className='form-control'
                />
              </div>
            </div>

            <div className='col'>
              <div className='mb-3'>
                <label htmlFor='confirm password'>Confirm Password</label>
                <input
                  onChange={(e) => {
                    setConfirmPassword(e.target.value)
                  }}
                  type='password'
                  className='form-control'
                />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                Already have account ? <Link to='/login'>Login here</Link>
              </div>

              <button onClick={onRegister} className='btn btn-success'>
                Register
              </button>
              <button onClick={onCancel} className='btn btn-danger ms-2'>
                Cancel
              </button>
            </div>
          </div>
        </div>

        <div className='col-1 mx-auto'></div>
      </div>

      </div>
      </div>
      </div>
      </div>
      </div>

    </div>
  )
}

export default RegisterUser
