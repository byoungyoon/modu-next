import * as styles from './globalTheme.css';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.layer}>
        <h1 className={styles.title404}>404</h1>
        <h3 className={styles.subTitle404}>Oops! This Page Could Not Be Found</h3>
        <p className={styles.body404}>
          SORRY BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST, HAVE BEEN REMOVED. NAME CHANGED OR IS TEMPORARILY
          UNAVAILABLE
        </p>
        <Link className={styles.button404} href={'/'}>
          GO TO HOMEPAGE
        </Link>
      </div>
    </div>
  );
}
