// @flow
import * as React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

type LabelObject = {
  label: string,
  linkRef?: string,
};
const LabelComp = ({
  type,
  labelObject = {},
}: {
  type: 'right' | 'left',
  labelObject?: LabelObject,
}) => {
  const { label, linkRef } = labelObject;
  return (
    <div className={classnames('InputWithLabel-label', type)}>
      {label && type === 'right' && <hr />}
      {linkRef ? <a href={linkRef}>{label}</a> : label}
      {label && type === 'left' && <hr />}
    </div>
  );
};

const InputWithLabel = ({
  children,
  className,
  labelLeft,
  labelRight,
}: {
  children: React.Node,
  className?: string,
  labelLeft?: LabelObject,
  labelRight?: LabelObject,
}) => {
  return (
    <div className={classnames('InputWithLabel', className)}>
      <LabelComp
        type="left"
        labelObject={labelLeft != null ? labelLeft : undefined}
      />
      <div className="InputWithLabel-children">{children}</div>
      <LabelComp
        type="right"
        labelObject={labelRight != null ? labelRight : undefined}
      />
    </div>
  );
};

const StyledInputWithLabel = styled(InputWithLabel)`
  display: flex;
  align-items: center;
  color: transparent;
  transition: color 1s;

  a {
    color: transparent;
    transition: color 1s;
  }

  .InputWithLabel-label {
    flex-basis: 0;
    flex-grow: 1;
    display: flex;
    align-items: center;

    &.right {
      margin-right: 1em;
    }
    &.left {
      margin-left: 1em;
    }

    hr {
      flex-grow: 1;
      height: 1px;
      border: 0;
      background-color: transparent;
      transition: background-color 1s;

      margin: 0 5px;
    }
  }
  :hover {
    color: lightgray;

    a {
      color: lightgray;
      :hover {
        color: blue;
      }
    }
    hr {
      background-color: lightgray;
    }
  }
`;

export default StyledInputWithLabel;
