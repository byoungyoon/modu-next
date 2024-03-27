import { ReactNode } from 'react';
import * as styles from '@/app/(beforeLogin)/map/mapTheme.css';
import Header from '@/app/(beforeLogin)/_component/Header';
import BackButton from '@/app/(beforeLogin)/map/view/_component/BackButton';

type Props = {
  children: ReactNode;
  message: ReactNode;
};

export default function MapLayout({ children, message }: Props) {
  return (
    <main className={styles.container}>
      <Header />
      <BackButton />
      <section className={styles.section}>
        {children}
        {message}
      </section>
    </main>
  );
}
