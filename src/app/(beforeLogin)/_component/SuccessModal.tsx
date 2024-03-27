'use client';

import * as styles from './SuccessModalTheme.css';
import Image from 'next/image';
import { MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  title: string;
  content: string;

  icon: string;
};

export default function SuccessModal({ title, content, icon }: Props) {
  const router = useRouter();

  const onClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();

    router.back();
  };

  const onClickArticle: MouseEventHandler<HTMLElement> = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={styles.modal} onClick={onClick}>
      <article className={styles.container} onClick={onClickArticle}>
        <Image src={icon} alt="success" />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.content}>{content}</p>
      </article>
    </div>
  );
}
