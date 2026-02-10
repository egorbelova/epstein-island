import { useEffect, useState } from 'react';
import styles from './Member.module.scss';

export default function Member({
  url,
  name,
  style,
}: {
  url: string;
  name: string;
  style?: React.CSSProperties;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.memberContainer}>
      <div
        className={styles.member}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          ...style,
        }}
      >
        <img src={url} draggable={false} />
      </div>{' '}
      <div className={styles.name}>{name}</div>
    </div>
  );
}
