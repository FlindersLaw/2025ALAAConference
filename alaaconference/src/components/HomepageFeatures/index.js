import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import './HomepageFeatures.css';

const FeatureList = [
  {
    title: 'First Nations Perspectives',
    thumbnail: 'img/home_page/first_nations_perspectives.jpg',
    description: (
      <>
        Incorporating First Nations perspectives into legal curricula and research: best practices and challenges
      </>
    ),
  },
  {
    title: 'Pacific perspectives and practices',
    thumbnail: 'img/home_page/pacific_perspectives.jpg',
    description: (
      <>
        Exploring contemporary challenges of legal research and education across the Pacific
      </>
    ),
  },
  {
    title: 'Climate change and Environmental Justice',
    thumbnail: 'img/home_page/environmental_law.jpg',
    description: (
      <>
        Integrating discussions of the climate crisis into legal education and scholarship, particularly into the core curriculum
      </>
    ),
  },
  {
    title: 'Artificial intelligence (AI)',
    thumbnail: 'img/home_page/legaltech.png',
    description: (
      <>
        The impact of artificial intelligence and digital technologies on legal research, assessment, and professional roles and competencies
      </>
    ),
  },
  {
    title: 'Legal Pedagogy',
    thumbnail: 'img/home_page/legal_education.jpg',
    description: (
      <>
        Navigating innovation in legal pedagogy and curriculum design within regulatory constraints
      </>
    ),
  },
  {
    title: 'Challenges to rule of law',
    thumbnail: 'img/home_page/dei.png',
    description: (
      <>
        Examining global perspectives on the rule of law and judicial independence
      </>
    ),
  },
  // {
  //   title: '',
  //   thumbnail: '',
  //   description: (
  //     <>
  //     </>
  //   ),
  // },
  {
    title: 'Social Justice-Oriented Education',
    thumbnail: 'img/home_page/ethics.png',
    description: (
      <>
        How can we develop an ethical and social-justice-oriented legal education curriculum that instils these values into students?
      </>
    ),
  },
];

function Feature({thumbnail, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" src={thumbnail} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
      </div>
      <div className='text--justified padding-horiz--md'>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="HPHeading">
          <h1>Navigating Tradition and Change</h1>
          <h2>How can we incorporate contemporary challenges into legal education and scholarship?</h2>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
