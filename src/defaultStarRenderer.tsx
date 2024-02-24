import * as React from 'react';
import './defaultStarRenderer.css';

const defaultStarRenderer = (): React.ReactNode => {
  return (
    <div className="DefaultStarComponent">{String.fromCharCode(9733)}</div>
  );
};

export default defaultStarRenderer;
