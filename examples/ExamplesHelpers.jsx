// @flow
import * as React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

const LabelComp = ({
  type,
  label,
  linkRef,
}: {
  type: 'right' | 'left',
  label: ?string,
  linkRef?: string,
}) => (
  <div className={classnames('InputWithLabel-label', type)}>
    {label && type === 'right' && <hr />}
    {linkRef ? <a href={linkRef}>{label}</a> : label}
    {label && type === 'left' && <hr />}
  </div>
);

const InputWithLabel = ({
  label,
  children,
  placement = 'left',
  className,
  linkRef,
}: {
  label: string,
  children: React.Node,
  placement: 'left' | 'right',
  className?: string,
  linkRef?: string,
}) => {
  return (
    <div className={classnames('InputWithLabel', className, placement)}>
      <LabelComp
        type="left"
        label={placement === 'left' ? label : undefined}
        linkRef={linkRef}
      />
      <div className="InputWithLabel-children">{children}</div>
      <LabelComp
        type="right"
        label={placement === 'right' ? label : undefined}
        linkRef={linkRef}
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
