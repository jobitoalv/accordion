import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, SingleQuestions] = useState(data);
  
  return <main>
            <div className='container'>

            </div>
          </main>;
}

export default App;
