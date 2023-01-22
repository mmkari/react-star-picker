import * as React from 'react';
import SourceCodeSection from '@site/src/components/SourceCodeSection';
import MyComponentSource from '!!raw-loader!@site/src/components/HomepageFeatures/BluePicker';
import MyComponentStyleSource from '!!raw-loader!@site/src/css/BluePicker.css';

const BluePicker = () => {
  return 'ASD';
  // return (
  //   <SourceCodeSection
  //     componentSource={MyComponentSource}
  //     componentStyleSource={MyComponentStyleSource}
  //   />
  // );
};

export default BluePicker;
