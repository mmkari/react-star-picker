import * as React from 'react';
import classnames from 'classnames';

import './defaultStarRenderer.css';

const defaultStarRenderer = (): React.ReactNode => {
  return (
    <div className={classnames('DefaultStarComponent')}>
      {String.fromCharCode(9733)}
    </div>
  );
};

export default defaultStarRenderer;
