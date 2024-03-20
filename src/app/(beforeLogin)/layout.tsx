import { ReactNode } from 'react';
import * as styles from './mainTheme.css';
import RQProvider from '@/app/(beforeLogin)/_component/RQProvider';

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function BeforeLoginLayout({ children, modal }: Props) {
  return (
    <div className={styles.main}>
      <RQProvider>
        {children}
        {modal}
      </RQProvider>
    </div>
  );
}
