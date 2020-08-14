import * as React from 'react';
import './Examples.css';
import './Examples_overrides.css';
import StarPicker from '../src/StarPicker.tsx';
// import StarPicker from '../src/index.ts';

import StyledInputWithLabel from './ExamplesHelpers';
import dollarRenderer from './customRenderer_dollar';
import characterRenderer from './customRenderer_characters';

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
        <StyledInputWithLabel
          labelLeft={{
            label: 'Half-star precision',
            linkRef: '#/Props/halfStars',
          }}
        >
          <StarPicker
            name="rating2"
            value={rating2}
            onChange={this.setValue}
            halfStars
            size={50}
          />
        </StyledInputWithLabel>

        <StyledInputWithLabel
          labelRight={{
            label: 'Custom animated SVGs',
            linkRef: '#/Examples/Custom%20Renderer/Animated%20SVG%20Icons',
          }}
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
          labelRight={{
            label: 'Custom character rendering',
            linkRef:
              '#/Examples/Custom%20Renderer/Advanced%20Character%20Renderer',
          }}
        >
          <StarPicker
            name="rating4"
            value={rating4}
            onChange={this.setValue}
            numberStars={5}
            starRenderer={characterRenderer}
            size={50}
          />
        </StyledInputWithLabel>

        <StyledInputWithLabel
          labelLeft={{
            label: 'Resets on double tap',
            linkRef: '#/Props/doubleTapResets',
          }}
          labelRight={{
            label: 'Custom styling',
            linkRef: '#/Examples/Default%20Renderer%3A%20Styling',
          }}
        >
          <StarPicker
            name="rating5"
            className="enlargeStar"
            value={rating5}
            onChange={this.setValue}
            doubleTapResets
          />
        </StyledInputWithLabel>

        <StyledInputWithLabel
          labelLeft={{
            label: 'Disabled',
            linkRef: '#/Props/disabled',
          }}
          labelRight={{
            label: 'Custom number of stars',
            linkRef: '#/Props/numberStars',
          }}
        >
          <StarPicker
            size={100}
            value={2}
            onChange={this.setValue}
            numberStars={3}
            disabled
          />
        </StyledInputWithLabel>
      </div>
    );
  }
}

export default Examples;
