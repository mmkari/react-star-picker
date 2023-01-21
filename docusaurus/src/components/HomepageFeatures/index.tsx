import React from 'react';

import clsx from 'clsx';

import StarPicker from 'react-star-picker';
import classnames from 'classnames';
import CodeIconSvg from '@site/static/img/codeIcon.svg';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export { default as GreenPicker } from '@site/src/components/HomepageFeatures/GreenPicker';
export { default as EnlargePicker } from '@site/src/components/HomepageFeatures/EnlargePicker';
export { default as RotatePicker } from '@site/src/components/HomepageFeatures/RotatePicker';
export { default as DollarPicker } from '@site/src/components/HomepageFeatures/DollarPicker';

type FeatureItem = {
  title: string;

  Svg: React.ComponentType<React.ComponentProps<'svg'>>;

  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',

    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,

    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },

  {
    title: 'Focus on What Matters',

    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,

    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },

  {
    title: 'Powered by React',

    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,

    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
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

export const LargePicker = () => {
  const [rating, setRating] = React.useState<number | null>(null);

  return (
    <StarPicker //
      className="largeStar"
      value={rating}
      onChange={setRating}
      size={50}
    />
  );
};

const customCharacterRenderer = ({ index, hoverIndex, selectedIndex }) => {
  const selected = index <= selectedIndex;
  const inHoverRange = hoverIndex != null && index <= hoverIndex;
  const hoverActive = hoverIndex != null;
  const isHovered = hoverIndex === index;

  return (
    <div
      className={classnames('CustomCharacterStar', {
        isHovered,
        selected,
        addSelection: hoverActive && !selected && inHoverRange,
        removeSelection: hoverActive && selected && !inHoverRange,
      })}
    >
      {selected ? String.fromCharCode(10029) : String.fromCharCode(9733)}
    </div>
  );
};
export const CustomPicker = () => {
  const [rating, setRating] = React.useState<number | null>(null);

  return (
    <StarPicker //
      className="customCharacter"
      value={rating}
      onChange={setRating}
      starRenderer={customCharacterRenderer}
      size={50}
      // numberStars={4}
    />
  );
};

const simpleRenderer = ({ index, hoverIndex, selectedIndex }) => {
  const selected = index <= selectedIndex;

  if (selected) {
    return String.fromCharCode(9733);
  }
  return String.fromCharCode(9734);
};
export const BluePicker = () => {
  const [rating, setRating] = React.useState<number | null>(null);

  return (
    <StarPicker //
      className="blueTheme"
      value={rating}
      onChange={setRating}
      starRenderer={simpleRenderer}
      size={60}
      halfStars
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
