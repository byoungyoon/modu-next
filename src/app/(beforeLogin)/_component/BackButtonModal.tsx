'use client';

import * as styles from './backButtonModalTheme.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Close from '@/../public/svg/close.svg';

export default function BackButtonModal() {
  const router = useRouter();

  const onClick = () => {
    router.back();
  };

  return (
    <div className={styles.backButtonSection}>
      <Image className={styles.backButton} onClick={onClick} alt="close" src={Close} width={24} height={24} />
    </div>
  );
}
