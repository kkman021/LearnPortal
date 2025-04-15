import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Containerized',
    Svg: require('@site/static/img/Feature_container.svg').default,
    description: (
      <>
        Run your application in a containerized environment. Docker is a tool designed to make it easier to create, deploy, and run applications by using containers.
      </>
    ),
  },
  {
    title: 'Easy Use',
    Svg: require('@site/static/img/Feature_SDK.svg').default,
    description: (
      <>
        EdgeSync SDK is a collection of libraries that can be used in any program language. It is designed to be easy to use and to provide a consistent interface.
      </>
    ),
  },
  {
    title: 'AI Application',
    Svg: require('@site/static/img/Feature_AI.svg').default,
    description: (
      <>
        Run your AI application on the edge. Edge computing is a distributed computing paradigm that brings computation and data storage closer to the location where it is needed.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--left padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
