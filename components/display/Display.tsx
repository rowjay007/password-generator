"use client"
import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectPassword } from '../../store/passwordSlice';
import {CopyIcon} from '../SVG/CopyIcon'

const Display: React.FC = () => {
  const password = useAppSelector(selectPassword);

  const copyHandler = () => {
    navigator.clipboard.writeText(password ? password : 'P4$5W0rD!');
  };

  return (
    <div>
      <div password={password}>
        {password ? password : 'P4$5W0rD!'}
      </div>
      <CopyIcon onClick={copyHandler} data-testid="copyIcon" />
    </div>
  );
};

export default Display;