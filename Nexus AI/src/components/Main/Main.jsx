import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  // Function to handle key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input) {
      onSent(); // Trigger the prompt submission
    }
  };

  // Function to handle click on a card
  const handleCardClick = (promptText) => {
    setInput(promptText);
    onSent(promptText);
  };

  return (
    <div className='main'>
      <div className='nav'>
        <p>Nexus AI</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className='main-container'>
        {!showResult ? (
          <>
            <div className='greet'>
              <p><span>Hello, User.</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className='cards'>
              <div className='card' onClick={() => handleCardClick('Suggest beautiful places to see on an upcoming road trip')}>
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className='card' onClick={() => handleCardClick('Summarize the concept of Machine Learning')}>
                <p>Summarize the concept of Machine Learning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className='card' onClick={() => handleCardClick('Who won the European Champions League 2024')}>
                <p>Who won the European Champions League 2024</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className='card' onClick={() => handleCardClick('Improve the readability of the following code')}>
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className='result'>
            <div className='result-title'>
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className='result-data'>
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className='loader'>
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className='main-bottom'>
          <div className='search-box'>
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder='Enter a prompt here'
              onKeyDown={handleKeyDown} // Listen for the Enter key
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
            </div>
          </div>
          <p className='bottom-info'>
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
