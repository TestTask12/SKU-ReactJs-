// import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { LOGOUT } from '../actions/types'
// import { connect } from 'react-redux';
// import { signup } from '../actions/auth';

// const Signup = ({ signup, isAuthenticated }) => {
//     const [formData, setFormData] = useState({
//         email: '',
//         username: '',
//         password: ''
//     });

//     const { email, username, password } = formData;

//     const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//     const onSubmit = e => {
//         e.preventDefault();

//         signup (email, username, password);
//     };

//     // Is the user authenticated?
//     // Redirect them to the home page

//     if (isAuthenticated) {
//         return <Redirect to='/' />
//     }

//     return (
//         <div className='container mt-5'>
//             <h1>Sign Up</h1>
//             <h4>Register your account</h4>
//             <form onSubmit={e => onSubmit(e)}>
//                 <div className='form-group'>
//                     <input
//                         className='form-control'
//                         type='email'
//                         placeholder='Email'
//                         name='email'
//                         value={email}
//                         onChange={e => onChange(e)}
//                         required
//                      />
//                 </div><br/>
//                 <div className='form-group'>
//                     <input
//                         className='form-control'
//                         type='username'
//                         placeholder='UserName'
//                         name='username'
//                         value={username}
//                         onChange={e => onChange(e)}
//                         required
//                      />
//                 </div><br/>
//                 <div className='form-group'>
//                     <input
//                         className='form-control'
//                         type='password'
//                         placeholder='Password'
//                         name='password'
//                         value={password}
//                         onChange={e => onChange(e)}
//                         minLength='6'
//                         required
//                      />
//                 </div><br/>
//                 <button className='btn btn-primary' type='submit'>Sign Up</button>
//             </form>
//             <p className='mt-3'>
//                If You have an account? <Link to='/login'>Login</Link>
//             </p>
//             <p className='mt-3'>
//                 Forgot your Password? <Link to='/reset-password'>Forgot Password</Link>
//             </p>

//         </div>
//     );
// };

// const mapStateToProps = state => ({
//     isAuthenticated: state.auth.isAuthenticated

//     });

// export default connect(mapStateToProps, { signup })(Signup);


import React from 'react';
class Add extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    // Input Change Handler
    changeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // Submit Form
    submitForm() {
        fetch('http://127.0.0.1:8001/auth/register/', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then((data) => console.log(data));

        this.setState({
            username: '',
            email: '',
            password: ''
        });
    }

    render() {
        return (
            <table className="table table-bordered">
                <h1>Sign Up</h1>
                <h4>Sign up your account</h4>
                <tbody>
                    <tr>
                        <th>User Name</th>
                        <td>
                            <input value={this.state.username} name="username" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>
                            <input value={this.state.email} name="email" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Password</th>
                        <td>
                            <input value={this.state.password} name="password" onChange={this.changeHandler} type="password" className="form-control" />
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="2">
                            <input type="submit" onClick={this.submitForm} className="btn btn-dark" />
                        </td>
                    </tr>
                    <p className='mt-3'>
                        If you have already an account? <Link to='/login'>Log In</Link>
                    </p>
                    <p className='mt-3'>
                        Forgot your Password? <Link to='/reset-password'>Forgot Password</Link>
                    </p>
                </tbody>
            </table>
        );
    }
}

export default Add;


export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
};