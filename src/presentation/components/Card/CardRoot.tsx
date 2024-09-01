import React from 'react';

type CardRootProps = React.HTMLAttributes<HTMLDivElement>;

export const CardRoot: React.FC<CardRootProps> = ({ className, ...props }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-4 flex justify-around flex-col ${className}`}
      {...props}
    />
  );
};
