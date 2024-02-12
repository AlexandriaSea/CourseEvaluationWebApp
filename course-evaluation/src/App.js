/*
Student Name: Wenjie Zhou
Student Number: 301337168
Submission Date: Feb 11, 2024
*/

import { useState } from 'react';
import LoginPage from './components/LoginPage';
import EvaluationPage from './components/EvaluationPage';
import ConfirmationPage from './components/ConfirmationPage';
import './App.css';

function App() {
  
  // Setup state variables: current page and user inputted data
  const [currentPage, setCurrentPage] = useState(1);
  const [userData, setUserData] = useState({});

  // Handle login action: save data and change page state
  const handleLogin = (data) => {
    setUserData(data);
    setCurrentPage(2);
  };

  // Handle evaluation form submission: add additional data and change page state
  const handleEvaluationSubmit = (evaluationData) => {
    setUserData({ ...userData, ...evaluationData });
    setCurrentPage(3);
  };

  // Handle return to login page: change page state
  const handleReturnToLoginPage = () => {
    setCurrentPage(1);
  };

  // Render to the correct page based on current page state and pass the necessary values and functions to pages
  return (
    <div className='App'>
      {currentPage === 1 && <LoginPage onLogin={handleLogin} />}
      {currentPage === 2 && <EvaluationPage email={userData.email} onEvaluationSubmit={handleEvaluationSubmit} onReturn={handleReturnToLoginPage} />}
      {currentPage === 3 && <ConfirmationPage email={userData.email} comments={userData.comments} onReturn={handleReturnToLoginPage} />}
    </div>
  );
}

export default App;
