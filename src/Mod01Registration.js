import React, { useState } from 'react';
import './App.css';

function Registration() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [coi, setCoi] = useState('');
    const [preferredenrollmentterm, setPreferredenrollmentterm] = useState('');
    const [ecn, setEcn] = useState('');
    const [ecpn, setEcpn] = useState('');
    const [additionalcomment, setAdditionalcomment] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submitted:', { fullname, email, dob, age, gender, address, coi, preferredenrollmentterm, ecn, ecpn, additionalcomment });
        setSubmitted(true);
    };

    return (
        <div className="Registration">
            <header className="App-header">
                <h1>Registration Form</h1>
                <form onSubmit={handleSubmit} className="Registration-form">
                    <div>
                        <label htmlFor="fullname">Full Name:</label>
                        <input
                            type="text"
                            id="fullname"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="dob">Date of Birth:</label>
                        <input
                            type="date"
                            id="dob"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="age">Age:</label>
                        <input
                            type="number"
                            id="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="gender">Gender:</label>
                        <select
                            id="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                        >
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="address">Address:</label>
                        <textarea
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="coi">Course of Interest:</label>
                        <select
                            id="coi"
                            value={coi}
                            onChange={(e) => setCoi(e.target.value)}
                            required
                        >
                            <option value="">Select Course</option>
                            <option value="IT">Information Technology</option>
                            <option value="CS">Computer Science</option>
                            <option value="MMA">Multi Media Arts</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="preferredenrollmentterm">Preferred Enrollment Term:</label>
                        <input
                            type="text"
                            id="preferredenrollmentterm"
                            value={preferredenrollmentterm}
                            onChange={(e) => setPreferredenrollmentterm(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="ecn">Emergency Contact Name:</label>
                        <input
                            type="text"
                            id="ecn"
                            value={ecn}
                            onChange={(e) => setEcn(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="ecpn">Emergency Contact Phone Number:</label>
                        <input
                            type="tel"
                            id="ecpn"
                            value={ecpn}
                            onChange={(e) => setEcpn(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="additionalcomment">Additional Comment:</label>
                        <textarea
                            id="additionalcomment"
                            value={additionalcomment}
                            onChange={(e) => setAdditionalcomment(e.target.value)}
                        />
                    </div>

                    <button className="btn" type="submit">Submit</button>
                </form>
                {submitted && (
                    <p className="success-message">Registration Successful!</p>
                )}
            </header>
        </div>
    );
}

export default Registration;