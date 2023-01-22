import * as React from 'react';
import SourceCodeSection from '@site/src/components/SourceCodeSection';
import MyComponentSource from '!!raw-loader!@site/src/components/HomepageFeatures/CharacterPicker';
import MyComponentStyleSource from '!!raw-loader!@site/src/css/CharacterPicker.css';

const CharacterPicker = () => {
  return (
    <SourceCodeSection
      componentSource={MyComponentSource}
      componentStyleSource={MyComponentStyleSource}
    />
  );
};

export default CharacterPicker;
