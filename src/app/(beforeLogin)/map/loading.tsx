import * as styles from '@/app/(beforeLogin)/_component/feedbackModalTheme.css';
import Image from 'next/image';
import { spin } from '@/app/animation.css';
import Ball from '@/../public/img/layer1.png';

export default function MapLoading() {
  return (
    <div className={styles.loading}>
      <Image className={spin} src={Ball} alt="ball" />
    </div>
  );
}
