'use client';

import * as styles from './addButtonTheme.css';
import Image from 'next/image';
import Plus from '../../../../../../public/svg/plus.svg';
import { usePathname, useRouter } from 'next/navigation';
import { useAddStore } from '@/app/store/add';

export default function AddButton() {
  const pathname = usePathname();
  const router = useRouter();
  const { reset } = useAddStore();

  const onClick = () => {
    if (pathname === '/map/mode') {
      router.push('/map/view');
    } else {
      reset();
      router.push('/map/mode');
    }
  };

  return (
    <button type="button" className={styles.addButton} onClick={onClick}>
      <h4>농구장 제보하기</h4>
      <Image src={Plus} alt="plus" />
    </button>
  );
}
