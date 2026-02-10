import styles from './App.module.scss';
import Member from './components/Member/Member';

const members = [
  {
    id: 1,
    url: '../images/members/woody_allen.webp',
    name: 'Woody Allen',
  },
  {
    id: 2,
    url: '../images/members/anil_ambani.jpg',
    name: 'Anil Ambani',
  },
  {
    id: 3,
    url: '../images/members/peter-attia.jpg',
    name: 'Peter Attia',
  },
  {
    id: 4,
    url: '../images/members/dan-ariely.webp',
    name: 'Dan Ariely',
  },
  {
    id: 5,
    url: '../images/members/jose_marfa_aznar.jpg',
    name: 'José Marfa Aznar',
  },
];

const rowPattern = [3, 2];

export default function App() {
  let idx = 0;
  const rows = [];

  while (idx < members.length) {
    for (let rowCount of rowPattern) {
      const rowImages = members.slice(idx, idx + rowCount);
      if (rowImages.length === 0) break;
      rows.push(rowImages);
      idx += rowCount;
    }
  }

  return (
    <>
      <div className={styles.backgroundContainer}>
        <img
          src='../images/-1x-1.webp'
          alt='background'
          className={styles.background}
        />
      </div>
      <header className={styles.header}>
        <h1>Welcome to Epstein Island!</h1>
        <p>
          Step into the mysterious island through this virtual experience.
          Explore secrets, legends, and stories safely from your home.
        </p>
      </header>
      <img src='../images/2145.webp' alt='epstein' className={styles.epstein} />

      <div className={styles.membersContainer}>
        {rows.map((rowImages, rowIndex) => (
          <div className={styles.row} key={rowIndex}>
            {rowImages.map((member, i) => (
              <Member
                key={member.id}
                url={member.url}
                name={member.name}
                style={{ transitionDelay: `${(i + rowIndex * 0.5) * 0.3}s` }}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
