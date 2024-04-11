'use client';

import * as styles from '@/app/globalTheme.css';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className={styles.container}>
      <div className={styles.layer}>
        <h1 className={styles.title404}>Error</h1>
        <h3 className={styles.subTitle404}>Something went wrong!</h3>
        <p className={styles.body404}>SORRY TRY AGAIN</p>
        <button type="button" onClick={() => reset()}>
          reset
        </button>
      </div>
    </div>
  );
}
