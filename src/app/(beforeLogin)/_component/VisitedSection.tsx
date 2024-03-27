'use client';

import * as styles from './visitedSectionTheme.css';
import { useQuery } from '@tanstack/react-query';
import { Visit } from '@/app/model/visit';
import { getVisit } from '@/app/(beforeLogin)/_lib/getVisit';
import { getCourtCount } from '@/app/(beforeLogin)/_lib/getCourtCount';
import { CourtCount } from '@/app/model/court';

export default function VisitedSection() {
  const { data: visit } = useQuery<Visit>({
    queryKey: ['visit'],
    queryFn: getVisit,
    staleTime: 30 * 1000,
    gcTime: 30 * 1000 * 5,
  });

  const { data: court } = useQuery<CourtCount>({
    queryKey: ['court', 'count'],
    queryFn: getCourtCount,
    staleTime: 30 * 1000,
    gcTime: 30 * 1000 * 5,
  });

  return (
    <section className={styles.section}>
      <article className={styles.sectionLayer}>
        <h2 className={styles.sectionLayerTitle}>{court?.count}개</h2>
        <p className={styles.sectionLayerContent}>
          현재 전국의 농구장 정보가 <span>{court?.count}</span>개 입력되어 있어요!
        </p>
      </article>
      <article className={styles.sectionLayer}>
        <h2 className={styles.sectionLayerTitle}>{visit?.count}명</h2>
        <p className={styles.sectionLayerContent}>
          지금까지 <span>{visit?.count}</span>명의 농구인들이 이 서비스를 방문했어요!
        </p>
      </article>
    </section>
  );
}
