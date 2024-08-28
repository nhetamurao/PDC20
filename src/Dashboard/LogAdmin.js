import React, { useState } from 'react';
import AdminPanel from './AdminPanel';
import './LogAdmin.css';

function LogAdmin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accountType, setAccountType] = useState('user');
    const [user, setUser] = useState(null);

    const handleLogin = () => {
        const isAdmin = accountType === 'admin';
        setUser({ name: username, isAdmin });
    };

    return (
        <div>
            {user ? (
                <AdminPanel user={user} />
            ) : (
                <div className="container">
                    <h1>Log In</h1>
                    <div>
                        <label>Username: </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Password: </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Account Type: </label>
                        <select
                            value={accountType}
                            onChange={(e) => setAccountType(e.target.value)}
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    <button onClick={handleLogin}>Login</button>
                    <button onClick={handleLogin}>SignUp</button>
                </div>
            )}
        </div>
    );
}

export default LogAdmin;