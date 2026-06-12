import React from 'react';

interface LogoProps {
  size?: number;
  showWordmark?: boolean;
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  size = 120,
  className = '',
}) => {
  return (
    <img
      src="/logo.svg"
      alt="Polyvox Logo"
      className={className}
      style={{
        width: size,
        height: 'auto',
      }}
    />
  );
};

export default Logo;
