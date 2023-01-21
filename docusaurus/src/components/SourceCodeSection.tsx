import * as React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
// import EnlargePicker from '@site/src/components/HomepageFeatures/EnlargePicker';

import CodeBlock from '@theme/CodeBlock';
// import MyComponentSource from '!!raw-loader!@site/src/components/HomepageFeatures/EnlargePicker';
// import MyComponentStyleSource from '!!raw-loader!@site/src/css/EnlargePicker.css';

const SourceCodeSection = ({
  component: Component,
  componentSource,
  componentStyleSource,
}) => {
  return (
    <div>
      <Component />

      <br />

      <details>
        <summary>Show code</summary>
        <p>
          <Tabs>
            <TabItem value="jsx" label="JSX">
              <CodeBlock language="typescript">{componentSource}</CodeBlock>
            </TabItem>

            <TabItem value="css" label="CSS">
              <CodeBlock language="css">{componentStyleSource}</CodeBlock>
            </TabItem>
          </Tabs>
        </p>
      </details>
    </div>
  );
};

export default SourceCodeSection;
