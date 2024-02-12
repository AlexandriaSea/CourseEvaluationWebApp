/*
Student Name: Wenjie Zhou
Student Number: 301337168
Submission Date: Feb 11, 2024
*/

import { useState } from 'react';

export default function LoginPage({ onLogin }) {

    // Setup state variables: email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle login submit: pass data into the props function onLogin
    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin({ email, password });
    };

    return (
        // Create a form layout
        // Modify state variables using onChange method
        <div className="container" style={{ backgroundColor: 'lightblue', padding: '300px', borderRadius: '500px' }}>
            <h3>Login to evaluate the course:</h3>
            <form onSubmit={handleSubmit}>
                <div className='row mt-5 mb-5'>
                    <label className="col-sm-5 col-form-label">Email:</label>
                    <div className='col-sm-5'>
                        <input type='email' className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                </div>
                <div className='row mt-5 mb-5'>
                    <label className="col-sm-5 col-form-label">Password:</label>
                    <div className='col-sm-5'>
                        <input type='password' className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                </div>
                <button type='submit' className="btn btn-primary" style={{ width: '25%' }}>Login</button>
            </form>
        </div>
    );
}