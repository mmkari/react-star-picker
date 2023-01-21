import React from 'react';

import clsx from 'clsx';

import StarPicker from 'react-star-picker';
import classnames from 'classnames';
import CodeIconSvg from '@site/static/img/codeIcon.svg';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export { default as GreenPicker } from '@site/src/components/HomepageFeatures/GreenPicker';
export { default as EnlargePicker } from '@site/src/components/HomepageFeatures/EnlargePicker';

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

export const RotatePicker = () => {
  const [rating, setRating] = React.useState<number | null>(null);

  return (
    <StarPicker //
      className="rotateStar"
      value={rating}
      onChange={setRating}
    />
  );
};

const dollarRenderer = ({ index, hoverIndex, selectedIndex }) => {
  const selected = index <= selectedIndex;
  const inHoverRange = hoverIndex != null && index <= hoverIndex;
  const hoverActive = hoverIndex != null;

  const colored = (selected && !hoverActive) || (inHoverRange && hoverActive);
  const color = colored ? '#1ca363' : 'grey';
  const colorOutline = colored ? 'green' : 'grey';
  return (
    <div className="dollarContainer">
      <svg style={{ padding: 5, width: '70%' }} viewBox="0 0 15 22">
        <path
          d="M 5.7672275,0.10454656 5.7687798,1.8432524 C 3.1530349,2.1696584 0.85511786,3.5105694 0.63651923,5.9335327 0.51636012,10.566614 10.734409,11.654347 10.934687,15.030807 10.864893,17.460972 4.2894804,17.706665 3.2163668,14.995092 L 0.02261549,15.720285 C 0.77014071,18.029563 3.1584552,19.322457 5.7677453,19.684782 L 5.7687798,21.539435 8.6509212,21.539953 8.6504035,19.710663 C 11.644631,19.349577 14.241035,17.773814 14.225752,15.097063 14.229088,9.1564354 4.1341996,9.133676 3.9524306,6.0044467 3.9494677,3.7582878 10.035145,3.326126 10.629806,6.0577627 L 13.68535,5.4536939 C 13.196125,3.4596776 11.059157,2.2534069 8.6509212,1.8856981 L 8.6504035,0.10506428 Z"
          stroke={colorOutline}
          fill={selected ? color : 'none'}
          strokeWidth="0.9"
        />
      </svg>
    </div>
  );
};
export const DollarPicker = () => {
  const [rating, setRating] = React.useState<number | null>(null);

  return (
    <StarPicker //
      value={rating}
      onChange={setRating}
      starRenderer={dollarRenderer}
      size={50}
      numberStars={4}
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
