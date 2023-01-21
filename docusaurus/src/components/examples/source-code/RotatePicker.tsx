import * as React from 'react';
import SourceCodeSection from '@site/src/components/SourceCodeSection';
import MyComponentSource from '!!raw-loader!@site/src/components/HomepageFeatures/RotatePicker';
import MyComponentStyleSource from '!!raw-loader!@site/src/css/RotatePicker.css';

const RotatePicker = () => {
  return (
    <SourceCodeSection
      componentSource={MyComponentSource}
      componentStyleSource={MyComponentStyleSource}
    />
  );
};

export default RotatePicker;
