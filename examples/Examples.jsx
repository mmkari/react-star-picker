// @flow
import * as React from 'react';
import './Examples.css';
import './Examples_overrides.css';
import classnames from 'classnames';

import styled, { keyframes } from 'styled-components';
import StarPicker from '../src/StarPicker';
import type { StarRendererProps } from '../src/types';

const LabelComp = ({
  type,
  label,
}: {
  type: 'right' | 'left',
  label: ?string,
}) => (
  <div className={classnames('InputWithLabel-label', type)}>
    {label && type === 'right' && <hr />}
    {label}
    {label && type === 'left' && <hr />}
  </div>
);

const InputWithLabel = ({
  label,
  children,
  placement = 'left',
  className,
}: {
  label: string,
  children: React.Node,
  placement: 'left' | 'right',
  className?: string,
}) => {
  return (
    <div className={classnames('InputWithLabel', className, placement)}>
      <LabelComp type="left" label={placement === 'left' && label} />
      <div className="InputWithLabel-children">{children}</div>
      <LabelComp type="right" label={placement === 'right' && label} />
    </div>
  );
};

const StyledInputWithLabel = styled(InputWithLabel)`
  display: flex;
  align-items: center;
  color: transparent;
  transition: color 1s;

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

    hr {
      background-color: lightgray;
    }
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  30% {
    transform: rotate(10deg);
  }

  70% {
    transform: rotate(-10deg);
  }
`;
const DollarSvgContainer = styled.div`
  display: flex;
  &:hover {
    animation: ${rotate} 0.3s ease-in-out;
  }
  padding: 0;
  margin: 0;
  font-size: 1.2rem;
`;

const dollarRenderer = ({
  index,
  hoverIndex,
  selectedIndex,
  size,
}: StarRendererProps): React.Node => {
  const selected = index <= selectedIndex;
  const nextSelection = hoverIndex != null && index <= hoverIndex;
  const hasHover = hoverIndex != null;

  const colored = (selected && !hasHover) || (nextSelection && hasHover);
  const color = colored ? '#1ca363' : 'grey';
  const colorOutline = colored ? 'green' : 'grey';
  return (
    <DollarSvgContainer>
      <svg style={{ padding: 5 }} width={size * 0.7} viewBox="0 0 15 22">
        <path
          d="M 5.7672275,0.10454656 5.7687798,1.8432524 C 3.1530349,2.1696584 0.85511786,3.5105694 0.63651923,5.9335327 0.51636012,10.566614 10.734409,11.654347 10.934687,15.030807 10.864893,17.460972 4.2894804,17.706665 3.2163668,14.995092 L 0.02261549,15.720285 C 0.77014071,18.029563 3.1584552,19.322457 5.7677453,19.684782 L 5.7687798,21.539435 8.6509212,21.539953 8.6504035,19.710663 C 11.644631,19.349577 14.241035,17.773814 14.225752,15.097063 14.229088,9.1564354 4.1341996,9.133676 3.9524306,6.0044467 3.9494677,3.7582878 10.035145,3.326126 10.629806,6.0577627 L 13.68535,5.4536939 C 13.196125,3.4596776 11.059157,2.2534069 8.6509212,1.8856981 L 8.6504035,0.10506428 Z"
          stroke={colorOutline}
          fill={selected ? color : 'none'}
          strokeWidth="0.9"
        />
      </svg>
    </DollarSvgContainer>
  );
};

type Props = {};
type State = {
  rating1: ?number,
  rating2: ?number,
  rating3: ?number,
  rating4: ?number,
  rating5: ?number,
};
class Examples extends React.Component<Props, State> {
  state = {
    rating1: 4,
    rating2: 3.5,
    rating3: 3,
    rating4: 3.5,
    rating5: 5,
  };

  setValue = (value: ?number, name?: string) => {
    if (name) {
      this.setState({ [name]: value });
    }
  };

  render() {
    const { rating1, rating2, rating3, rating4, rating5 } = this.state;

    return (
      <div className="Examples">
        <StyledInputWithLabel label="Customizable color mixings">
          <StarPicker
            name="rating1"
            value={rating1}
            onChange={this.setValue}
            defaultStarRendererProps={{
              colorActive: '#df00ff',
              colorInactive: '#ccccff',
              colorBlendFractionAdd: 0.5,
              colorBlendFractionRemove: 0.6,
              charCodeUnselected: 9734,
            }}
          />
        </StyledInputWithLabel>

        <StyledInputWithLabel label="Half-star support">
          <StarPicker
            name="rating2"
            value={rating2}
            onChange={this.setValue}
            halfStars
            size={50}
            defaultStarRendererProps={{
              colorActive: 'orange',
              colorBlendFractionRemove: 0.4,
              charCodeUnselected: 9734,
            }}
          />
        </StyledInputWithLabel>

        <StyledInputWithLabel
          label="Custom star renderer with an SVG"
          placement="right"
        >
          <StarPicker
            name="rating3"
            value={rating3}
            onChange={this.setValue}
            numberStars={4}
            starRenderer={dollarRenderer}
          />
        </StyledInputWithLabel>

        <StyledInputWithLabel
          label="Customizable star characters"
          placement="right"
        >
          <StarPicker
            name="rating4"
            value={rating4}
            onChange={this.setValue}
            halfStars
            size={70}
            defaultStarRendererProps={{
              colorActive: '#ff3333',
              colorBlendFractionRemove: 0.5,
              charCodeSelected: 10029,
            }}
          />
        </StyledInputWithLabel>

        <StyledInputWithLabel label="Customizable style" placement="right">
          <StarPicker
            name="rating5"
            className="enlargeStar"
            value={rating5}
            onChange={this.setValue}
            doubleTapResets
            defaultStarRendererProps={{
              colorBlendFractionAdd: null,
              colorBlendFractionRemove: null,
            }}
          />
        </StyledInputWithLabel>

        <StyledInputWithLabel label="(disabled)">
          <StarPicker
            value={2}
            onChange={this.setValue}
            numberStars={3}
            disabled
            defaultStarRendererProps={{
              colorActive: 'blue',
            }}
          />
        </StyledInputWithLabel>
      </div>
    );
  }
}

export default Examples;
