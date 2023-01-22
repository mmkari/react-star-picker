import * as React from 'react';
import SourceCodeSection from '@site/src/components/SourceCodeSection';
import MyComponentSource from '!!raw-loader!@site/src/components/HomepageFeatures/LargePicker';

const LargePicker = () => {
  return (
    <SourceCodeSection
      componentSource={MyComponentSource}
      componentStyleSource={null}
    />
  );
};

export default LargePicker;
