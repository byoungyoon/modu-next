'use client';

import * as styles from '@/app/(beforeLogin)/map/@message/(.)mode/modeTheme.css';
import ResultButton from '@/app/(beforeLogin)/map/@message/(.)mode/_component/ResultButton';
import { usePathname } from 'next/navigation';

export default function ModeMessage() {
  const pathname = usePathname();

  return pathname === '/map/mode' ? (
    <div className={styles.container}>
      <article className={styles.layer}>제보하실 농구장의 위치를 지도에서 놀러주세요.</article>
      <ResultButton />
    </div>
  ) : (
    <></>
  );
}
