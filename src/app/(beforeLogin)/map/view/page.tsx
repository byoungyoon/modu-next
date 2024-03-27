import { Suspense } from 'react';
import Loading from '@/app/(beforeLogin)/loading';
import BasicMapSuspense from '@/app/(beforeLogin)/map/view/_component/BasicMapSuspense';
import * as styles from '@/app/(beforeLogin)/map/mapTheme.css';
import SearchInput from '@/app/(beforeLogin)/map/view/_component/SearchInput';
import Link from 'next/link';
import Image from 'next/image';
import Feedback from '@/../public/svg/feedback.svg';
import LocationButton from '@/app/(beforeLogin)/map/view/_component/LocationButton';
import AddButton from '@/app/(beforeLogin)/map/view/_component/AddButton';

export default function Page() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <BasicMapSuspense />
      </Suspense>
      <article className={styles.searchLayer}>
        <SearchInput />
      </article>
      <article className={styles.optionLayer}>
        <Link className={styles.iconButton} href={'/feedback'}>
          <Image className={styles.iconButtonImage} src={Feedback} alt="feedback" />
        </Link>
        <LocationButton />
        <AddButton />
      </article>
    </>
  );
}
