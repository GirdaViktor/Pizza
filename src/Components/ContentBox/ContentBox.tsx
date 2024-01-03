import React, { ReactNode } from 'react';

import "./style.scss";

type ContentProps = {
  className?: string;
  children: ReactNode
}
const ContentBox:React.FC<ContentProps> = ({children, className}) => {
  return (
    <div className="content">
      <div className={`container${className ? ` ${className}` : ''}`}>
        { children }
      </div>
    </div>
  );
};

export default ContentBox;