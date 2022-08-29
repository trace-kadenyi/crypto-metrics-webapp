import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiTwotoneAudio } from 'react-icons/ai';
import { FaStepBackward } from 'react-icons/fa';
import { IoSettingsSharp } from 'react-icons/io5';
import './Navigation.css';

const Navigation = () => (
  <header>
    <div>
      <NavLink to="/"><FaStepBackward className="icon" /></NavLink>
    </div>
    <div>
      <h1 className="crypto_heading">crypto</h1>
    </div>
    <div>
      <AiTwotoneAudio className="icon" />
      <IoSettingsSharp className="icon" />
    </div>
  </header>
);

export default Navigation;
