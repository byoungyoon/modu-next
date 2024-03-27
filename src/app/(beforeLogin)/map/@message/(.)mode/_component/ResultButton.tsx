'use client';

import cx from 'classnames';
import * as styles from './resultButtonTheme.css';
import { useAddStore } from '@/app/store/add';

export default function ResultButton() {
  const { isActive, setClick } = useAddStore();

  const onClick = () => {
    setClick();
  };

  return (
    <button
      type="button"
      className={cx(styles.resultButton, !isActive && styles.resultButtonDisabled)}
      onClick={onClick}
    >
      현재 위치 선택
    </button>
  );
}
