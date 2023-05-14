import React from 'react';

import clsx from 'clsx';

import StarPicker from 'react-star-picker';
import CodeIconSvg from '@site/static/img/codeIcon.svg';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export { default as GreenPicker } from '@site/src/components/HomepageFeatures/GreenPicker';
export { default as EnlargePicker } from '@site/src/components/HomepageFeatures/EnlargePicker';
export { default as RotatePicker } from '@site/src/components/HomepageFeatures/RotatePicker';
export { default as DollarPicker } from '@site/src/components/HomepageFeatures/DollarPicker';
export { default as CharacterPicker } from '@site/src/components/HomepageFeatures/CharacterPicker';
export { default as BluePicker } from '@site/src/components/HomepageFeatures/BluePicker';
export { default as LargePicker } from '@site/src/components/HomepageFeatures/LargePicker';

type FeatureItem = {
  title: string;

  Svg: React.ComponentType<React.ComponentProps<'svg'>>;

  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Half-Star Precision',
    Svg: require('@site/static/img/half_star.svg').default,
    description: <>Ratings can be selected with half-star precision.</>,
  },

  {
    title: 'Hover States',

    Svg: require('@site/static/img/hover_states.svg').default,

    description: (
      <>
        React-star-picker recognizes when there is an active mouse hover action
        and for each star whether they are included or excluded from the
        suggested new selection or being currently hovered over.
      </>
    ),
  },

  {
    title: 'Custom Star Renderer',

    Svg: require('@site/static/img/dollar.svg').default,

    description: (
      <>
        A render function can be used to customize the star icons or to define
        more complex styling and animations. The function receives information
        on the current selection and any active mouse hover states.
      </>
    ),
  },

  {
    title: 'Number of Stars',

    Svg: require('@site/static/img/count.svg').default,

    description: <>The number of stars can be chosen.</>,
  },

  {
    title: 'Resetting',

    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,

    description: (
      <>
        An existing rating may be deselected with another click using an
        optional reset feature.
      </>
    ),
  },

  {
    title: 'Disabling',

    Svg: require('@site/static/img/forbidden.svg').default,

    description: (
      <>
        The input can be disabled preventing new selections and hover state
        tracking.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>

      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>

        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export const Test = () => {
  const [rating, setRating] = React.useState<number | null>(null);

  return (
    <StarPicker //
      value={rating}
      onChange={setRating}
    />
  );
};

export const CodeIcon = () => {
  return (
    <div className="Icon" style={{ width: 24, height: 24, color: 'red' }}>
      <CodeIconSvg />
    </div>
  );
};

export const CodeIconLink = ({ to }) => {
  return (
    <Link className="" to={to}>
      <CodeIcon />
    </Link>
  );
};

export const LinkContainer = ({ to, content }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div>{content}</div>
      <CodeIconLink to={to} />
    </div>
  );
};

export const CenteredContainer = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  );
};
