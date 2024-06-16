import React from 'react'
import { Constants } from '../COSTANTS';

type Props = {
    name: string;
    imgurl: string;
    description: string;
    size: 'small' | 'medium' | 'large';
  }
  const Project: React.FC<Props> = ({ name, imgurl, description, size }) => {
    return (
      <div className={`rounded-md border-white border-2 flex flex-col p-4 bg-gray-800 ${Constants.sizeClasses[size]}`}>
        <div className='mb-4 flex-grow'>
          <img src={imgurl} alt={name} className='h-full w-full object-cover rounded-md' />
        </div>
        <div className='text-white mb-2'>
          <h2 className='text-xl font-bold'>{name}</h2>
        </div>
        <div className='text-white'>
          <h4 className='text-sm'>{description}</h4>
        </div>
      </div>
    );
  };

export default Project