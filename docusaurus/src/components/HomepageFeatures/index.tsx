import React from 'react';

import clsx from 'clsx';

import StarPicker from 'react-star-picker';
import CodeIconSvg from '@site/static/img/codeIcon.svg';
import Link from '@docusaurus/Link';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

const Wrapper = ({ cb }) => {
  return (
    <BrowserOnly fallback={null}>
      {() => {
        const LibComponent = cb().default;
        return <LibComponent />;
      }}
    </BrowserOnly>
  );
};
const getWrapped = (cb) => {
  return () => {
    return <Wrapper cb={cb} />;
  };
};

export const GreenPicker = getWrapped(() =>
  require('@site/src/components/HomepageFeatures/GreenPicker')
);
export const EnlargePicker = getWrapped(() =>
  require('@site/src/components/HomepageFeatures/EnlargePicker')
);
export const RotatePicker = getWrapped(() =>
  require('@site/src/components/HomepageFeatures/RotatePicker')
);
export const DollarPicker = getWrapped(() =>
  require('@site/src/components/HomepageFeatures/DollarPicker')
);
export const CharacterPicker = getWrapped(() =>
  require('@site/src/components/HomepageFeatures/CharacterPicker')
);
export const BluePicker = getWrapped(() =>
  require('@site/src/components/HomepageFeatures/BluePicker')
);
export const LargePicker = getWrapped(() =>
  require('@site/src/components/HomepageFeatures/LargePicker')
);

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
        Stars are given classnames that indicate whether the star is selected,
        hovered over or included or excluded from an active selection.
      </>
    ),
  },

  {
    title: 'Custom Star Renderer',

    Svg: require('@site/static/img/dollar.svg').default,

    description: (
      <>
        A render function can be used to customize the star icons or to define
        more complex styling and animations.
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

    Svg: require('@site/static/img/resets.svg').default,

    description: <>An existing rating can be reset with another click.</>,
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
