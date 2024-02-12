/*
Student Name: Wenjie Zhou
Student Number: 301337168
Submission Date: Feb 11, 2024
*/

export default function ConfirmationPage({ email, comments, onReturn }) {

    return (
        // Display email and comments from props
        // Create a return button using props onReturn function
        <div className="container" style={{ backgroundColor: 'lightblue', padding: '300px', borderRadius: '500px' }}>
            <h1>Thank You {email}</h1>
            <div className='row mt-5 mb-5'>
                <p>We appreciate your valuable comments:</p>
                <p>{comments}</p>
            </div>
            <button className="btn btn-secondary" style={{ width: '25%' }} onClick={onReturn}>Return to Homepage</button>
        </div>
    );
}