import React, { useState } from 'react';

const ProjectCard = (props) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  const renderDescription = () => {
    if (isTruncated) {
      return props.ProjectDescrip.length > 70
        ? props.ProjectDescrip.substring(0, 70) + '...'
        : props.ProjectDescrip;
    } else {
      return props.ProjectDescrip;
    }
  };

  return (
    <div className='text-white'>
      <div className="rounded-2xl overflow-hidden shadow-lg border">
        <img className="w-full h-80 rounded" src={props.ProjectImg} alt="Mountain" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.ProjectName}</div>
          <p className="text-white text-base text-justify">
            {renderDescription()}
            {props.ProjectDescrip.length > 70 && (
              <span
                className="text-blue-500 cursor-pointer"
                onClick={toggleTruncate}
              >
                {isTruncated ? ' Read more' : ' Show less'}
              </span>
            )}
          </p>
        </div>
        <div className="px-6 pt-2 pb-5">
          
          <a href={props.ProjectLink}>
            <span className="flex-row bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:cursor-pointer">Visit</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
