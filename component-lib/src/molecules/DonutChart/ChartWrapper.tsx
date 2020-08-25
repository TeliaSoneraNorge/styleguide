import React from 'react';

const ChartWrapper = ({
  link,
  children,
  size,
  className
}: any) =>
  link ? (
    <a href={link} className={className} style={{ width: size, height: size }}>
      {children}
    </a>
  ) : (
    <div className={className} style={{ width: size, height: size }}>
      {children}
    </div>
  );

export default ChartWrapper;
