import React, {ReactNode} from 'react';

type ContentProps = {
  className?: string;
  children: ReactNode
}
const CartContainer: React.FC<ContentProps> = ({children, className}) => {
  return (
    <div className={`cart${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  );
};

export default CartContainer;