import React from 'react';
function AdminPanel({user}){
    return(
        <div>
            {user.isAdmin?(
                <div>
                    <h1>Admin Dashboad</h1>
                    <p>Welcome, {user.name}! You have admin privileges</p>
                    <button>Add New Users</button>
                    <button>Manage Users</button>
                    <button>Manage Settings</button>
                    <button>View Reports</button>
                </div>):(
                    <div>
                    <h1>Guest Dashboad</h1>
                    <p>Welcome, {user.name}! You are not admin</p>
                    <button>View Profile</button>
                    <button>Settings</button>
                    </div>)}
        </div>
    );

}

export default AdminPanel;