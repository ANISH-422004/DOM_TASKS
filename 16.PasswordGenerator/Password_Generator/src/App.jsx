import React, { useState, useEffect } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false); 
  const [includeSpecial, setIncludeSpecial] = useState(false);
  
  // Password generation 
  const generatePassword = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    let allCharacters = characters;
    if (includeNumbers) allCharacters += numbers;
    if (includeSpecial) allCharacters += specialChars;

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }
    setPassword(newPassword);
  };

 
  useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeSpecial]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className='bg-slate-500 w-[90vw] h-[50vh] lg:h-[40vh] lg:w-[50vw] flex flex-col gap-1 items-center p-4 rounded'>
      <h1>Password Generator</h1>
      <div>
        <label>Length:{length}</label>
        <input
          type="range"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          min="8"
          max="20"
        />
      </div>
      <div>
        <label>Include Numbers:</label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
      </div>
      <div>
        <label>Include Special Characters:</label>
        <input
          type="checkbox"
          checked={includeSpecial}
          onChange={(e) => setIncludeSpecial(e.target.checked)}
        />
      </div>
      <div>
        <p className='text-2xl font-mono'>Generated Password: {password}</p>
      </div>
      <button onClick={copyToClipboard}>Copy</button>
    </div>
  );
};

export default PasswordGenerator;
