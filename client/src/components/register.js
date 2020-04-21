import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3300/api/auth/register', {
            username,
            password
        });

        if (res.status === 201) {
            localStorage.setItem('token', res.data.token);
            history.push('/App');
        }

        } catch (err) {
            console.error(err);
        } 
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div>
                <h2>Register</h2>

                <input
                    id = 'username'
                    label = 'username'
                    name = 'username'
                    type = 'text'
                    placeholder = 'username'
                    onChange = {e => setUsername(e.target.value)}
                    value = {username}
                />

            </div>

            <div>
                <input
                    id = 'password'
                    label = 'password'
                    name = 'password'
                    type = 'password'
                    placeholder = 'password'
                    onChange = {e => setPassword(e.target.value)}
                    value = {password}
                />

            </div>
            
            <button>Register</button>
            <p>
                Jump into your account! <Link to = '/login'>Enter</Link>
            </p>
        </form>
        </div>
    );
};

export default Register;