'use client';

import * as styles from './submitButtonFormTheme.css';
import cx from 'classnames';
import { useRouter } from 'next/navigation';
import { useFormStatus } from 'react-dom';

type Props = {
  isActive?: boolean;

  text: string;
};

export default function SubmitButtonForm({ isActive = true, text }: Props) {
  const router = useRouter();
  const { pending } = useFormStatus();

  const onClick = () => {
    router.back();
  };

  return (
    <div className={styles.buttonSection}>
      <button
        className={cx(styles.submitButton, !pending && isActive && styles.activeButton)}
        type="submit"
        disabled={pending || !isActive}
      >
        {text}
      </button>
      <button className={styles.closeButton} type="button" onClick={onClick}>
        취소하기
      </button>
    </div>
  );
}
