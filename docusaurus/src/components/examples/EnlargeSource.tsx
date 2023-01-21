import * as React from 'react';
import SourceCodeSection from '@site/src/components/SourceCodeSection';
import EnlargePicker from '@site/src/components/HomepageFeatures/EnlargePicker';
import MyComponentSource from '!!raw-loader!@site/src/components/HomepageFeatures/EnlargePicker';
import MyComponentStyleSource from '!!raw-loader!@site/src/css/EnlargePicker.css';

const EnlargeSource = () => {
  return (
    <SourceCodeSection
      component={EnlargePicker}
      componentSource={MyComponentSource}
      componentStyleSource={MyComponentStyleSource}
    />
  );
};

export default EnlargeSource;
