import * as React from 'react';
import SourceCodeSection from '@site/src/components/SourceCodeSection';
import MyComponentSource from '!!raw-loader!@site/src/components/HomepageFeatures/EnlargePicker';
import MyComponentStyleSource from '!!raw-loader!@site/src/css/EnlargePicker.css';

const EnlargePicker = () => {
  return (
    <SourceCodeSection
      componentSource={MyComponentSource}
      componentStyleSource={MyComponentStyleSource}
    />
  );
};

export default EnlargePicker;
