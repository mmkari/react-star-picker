import * as React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

const SourceCodeSection = ({ componentSource, componentStyleSource }) => {
  return (
    <Tabs>
      {componentSource && (
        <TabItem value="jsx" label="JSX">
          <CodeBlock language="typescript">{componentSource}</CodeBlock>
        </TabItem>
      )}

      {componentStyleSource && (
        <TabItem value="css" label="CSS">
          <CodeBlock language="css">{componentStyleSource}</CodeBlock>
        </TabItem>
      )}
    </Tabs>
  );
};

export default SourceCodeSection;
