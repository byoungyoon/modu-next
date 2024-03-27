'use client';

import * as styles from '@/app/(beforeLogin)/map/mapTheme.css';
import Image from 'next/image';
import Location from '../../../../../../public/svg/location.svg';
import { useSearchStore } from '@/app/store/search';

export default function LocationButton() {
  const { setForm } = useSearchStore();

  const onClick = () => {
    setForm('');
  };

  return (
    <button className={styles.iconButton} onClick={onClick}>
      <Image className={styles.iconButtonImage} src={Location} alt="location" />
    </button>
  );
}
