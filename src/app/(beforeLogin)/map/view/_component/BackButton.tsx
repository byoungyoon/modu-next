'use client';

import Image from 'next/image';
import * as styles from './backButtonTheme.css';
import Arrow from '../../../../../../public/svg/arrow.svg';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  const onClick = () => {
    router.push('/');
  };

  return <Image className={styles.backIcon} src={Arrow} alt="arrow" onClick={onClick} />;
}
