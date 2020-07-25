import * as React from 'react';
import './Examples.css';
import './Examples_overrides.css';
import StarPicker from '../dist-ts/StarPicker';
// import StarPicker from '../src/index.ts';

import StyledInputWithLabel from './ExamplesHelpers';
import dollarRenderer from './customRenderer_dollar';

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
            label: 'Color mixing',
            linkRef: '#/Examples/Default%20Renderer%3A%20Color%20mixing',
          }}
        >
          <StarPicker
            name="rating1"
            value={rating1}
            onChange={this.setValue}
            starRendererProps={{
              colorActive: '#df00ff',
              colorInactive: '#ccccff',
              colorRemove: '#a900c1',
              charCodeUnselected: 9734,
            }}
          />
        </StyledInputWithLabel>

        <StyledInputWithLabel
          labelLeft={{
            label: 'Half-star support',
            linkRef: '#/Examples/Half%20stars',
          }}
        >
          <StarPicker
            name="rating2"
            value={rating2}
            onChange={this.setValue}
            halfStars
            size={50}
            starRendererProps={{
              colorActive: 'orange',
              charCodeUnselected: 9734,
            }}
          />
        </StyledInputWithLabel>

        <StyledInputWithLabel
          labelRight={{
            label: 'Custom star renderer support',
            linkRef: '#/Examples/Using%20a%20Custom%20Renderer',
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
            label: 'UTF-16 characters',
            linkRef: '#/Examples/Default%20Renderer%3A%20Custom%20characters',
          }}
        >
          <StarPicker
            name="rating4"
            value={rating4}
            onChange={this.setValue}
            halfStars
            size={70}
            starRendererProps={{
              colorActive: '#ff3333',
              charCodeSelected: 10029,
            }}
          />
        </StyledInputWithLabel>

        <StyledInputWithLabel
          labelLeft={{
            label: '(Resets on double tap)',
            linkRef: '#/Examples/Resetting',
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
            starRendererProps={{
              colorAdd: null,
              colorRemove: null,
            }}
          />
        </StyledInputWithLabel>

        <StyledInputWithLabel
          labelLeft={{
            label: '(disabled)',
            linkRef: '#/Examples/Disabling',
          }}
          labelRight={{
            label: 'Custom number of stars',
            linkRef: '#/Examples/Number%20of%20stars',
          }}
        >
          <StarPicker
            value={2}
            onChange={this.setValue}
            numberStars={3}
            disabled
            starRendererProps={{
              colorActive: 'blue',
            }}
          />
        </StyledInputWithLabel>
      </div>
    );
  }
}

export default Examples;
