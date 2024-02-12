/*
Student Name: Wenjie Zhou
Student Number: 301337168
Submission Date: Feb 11, 2024
*/

import { useState } from 'react';

export default function EvaluationPage({ email, onEvaluationSubmit, onReturn }) {

    // Setup state variables: course code, course name, best assignment, worst assignment, and comments
    const [courseCode, setCourseCode] = useState('');
    const [courseName, setCourseName] = useState('');
    const [bestAssignment, setBestAssignment] = useState('');
    const [worstAssignment, setWorstAssignment] = useState('');
    const [comments, setComments] = useState('');

    // Handle evaluation form submit: pass data into the props onEvaluationSubmit function
    const handleSubmit = (e) => {
        e.preventDefault();
        onEvaluationSubmit({ courseCode, courseName, bestAssignment, worstAssignment, comments });
    };

    return (
        // Create a form layout
        // Modify state variables using onChange method
        // Display email from props as readonly
        // Create a return button using props onReturn function
        <div className="container" style={{ backgroundColor: 'lightblue', padding: '300px', borderRadius: '500px' }}>
            <h3>Please write your evaluation below:</h3>
            <form onSubmit={handleSubmit}>
                <div className='row mt-5 mb-5'>
                    <label className="col-sm-5 col-form-label">Course Code:</label>
                    <div className='col-sm-5'>
                        <input type='text' className="form-control" value={courseCode} onChange={(e) => setCourseCode(e.target.value)} required />
                    </div>
                </div>
                <div className='row mt-5 mb-5'>
                    <label className="col-sm-5 col-form-label">Course Name:</label>
                    <div className='col-sm-5'>
                        <input type='text' className="form-control" value={courseName} onChange={(e) => setCourseName(e.target.value)} required />
                    </div>
                </div>
                <div className='row mt-5 mb-5'>
                    <label className="col-sm-5 col-form-label">Student Email:</label>
                    <div className='col-sm-5'>
                        <input type='email' className="form-control" value={email} readOnly />
                    </div>
                </div>
                <div className='row mt-5 mb-5'>
                    <label className="col-sm-5 col-form-label">Best Assignment:</label>
                    <div className='col-sm-5'>
                        <input type='text' className="form-control" value={bestAssignment} onChange={(e) => setBestAssignment(e.target.value)} required />
                    </div>
                </div>
                <div className='row mt-5 mb-5'>
                    <label className="col-sm-5 col-form-label">Worst Assignment:</label>
                    <div className='col-sm-5'>
                        <input type='text' className="form-control" value={worstAssignment} onChange={(e) => setWorstAssignment(e.target.value)} required />
                    </div>
                </div>
                <div className='row mt-5 mb-5'>
                    <label className="col-sm-5 col-form-label">Your Comments:</label>
                    <div className='col-sm-5'>
                        <textarea rows={3} className="form-control" value={comments} onChange={(e) => setComments(e.target.value)} required />
                    </div>
                </div>
                <button type='submit' className="btn btn-primary" style={{ width: '25%' }}>Submit</button>
                <button className="btn btn-secondary" style={{ width: '25%', marginLeft: '60px' }} onClick={onReturn}>Return to Homepage</button>
            </form>
        </div>
    );
}