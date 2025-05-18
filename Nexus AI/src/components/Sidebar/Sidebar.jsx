import React, { useContext, useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets.js';
import { Context } from '../../context/Context.jsx';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="top">
        <img
          onClick={() => setCollapsed((prev) => !prev)}
          className='menu'
          src={assets.menu_icon}
          alt=''
        />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {!collapsed && <p>New Chat</p>}
        </div>
        {!collapsed && (
          <div className='recent'>
            <p className='recent-title'>Recent</p>
            {prevPrompt.map((item, index) => (
              <div key={index} onClick={() => loadPrompt(item)} className='recent-entry'>
                <img src={assets.message_icon} alt="" />
                <p>{item.slice(0, 18)} ...</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="bottom">
        <div className='bottom-item recent-entry'>
          <img src={assets.question_icon} alt="" />
          {!collapsed && <p>Help</p>}
        </div>
        <div className='bottom-item recent-entry'>
          <img src={assets.history_icon} alt="" />
          {!collapsed && <p>Activity</p>}
        </div>
        <div className='bottom-item recent-entry'>
          <img src={assets.setting_icon} alt="" />
          {!collapsed && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
