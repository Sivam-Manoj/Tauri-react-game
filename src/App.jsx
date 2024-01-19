import  { useState } from 'react';

function App() {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function handleInputChange(event) {
    setGuess(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    checkGuess();
  }

  function checkGuess() {
    const guessedNumber = parseInt(guess, 10);

    if (isNaN(guessedNumber)) {
      setMessage('Please enter a valid number.');
    } else if (guessedNumber < targetNumber) {
      setMessage('Too low! Try again.');
    } else if (guessedNumber > targetNumber) {
      setMessage('Too high! Try again.');
    } else {
      setMessage(`Congratulations! You guessed the correct number (${targetNumber}).`);
      setTargetNumber(generateRandomNumber());
      setGuess('');
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Guess the Number</h1>
      <p className="text-lg mb-4">{message}</p>
      <form className="flex flex-col items-center" onSubmit={handleFormSubmit}>
        <label className="text-lg mb-2">Enter your guess:</label>
        <input
          type="text"
          value={guess}
          onChange={handleInputChange}
          className="w-16 text-lg py-2 px-3 border rounded mb-4"
        />
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded cursor-pointer"
        >
          Submit Guess
        </button>
      </form>
    </div>
  );
}

export default App;
