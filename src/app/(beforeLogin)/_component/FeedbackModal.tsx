'use client';

import Image from 'next/image';
import * as styles from './feedbackModalTheme.css';
import { useRouter } from 'next/navigation';

export default function FeedbackModal() {
  const router = useRouter();

  const face = [
    {
      def: '/img/face-1-default.png',
      pre: '/img/face-1-pressed.png',
      text: '최고예요',
    },
    {
      def: '/img/face-2-default.png',
      pre: '/img/face-2-pressed.png',
      text: '좋아요',
    },
    {
      def: '/img/face-3-default.png',
      pre: '/img/face-3-pressed.png',
      text: '만족해요',
    },
    {
      def: '/img/face-4-default.png',
      pre: '/img/face-4-pressed.png',
      text: '별로예요',
    },
    {
      def: '/img/face-5-default.png',
      pre: '/img/face-5-pressed.png',
      text: '싫어요',
    },
  ];

  const onClickBack = () => {
    router.back();
  };

  return (
    <div className={styles.modal}>
      <article className={styles.container}>
        <div className={styles.title}>여러분의 의견을 들려주세요!</div>
        <div className={styles.subTitle}>모두의 농구장이 도움이 되었나요?</div>
        <div className={styles.faceSection}>
          {face.map((v, index) => (
            <div className={styles.faceSectionItem} key={index}>
              <Image className={styles.faceSectionImage} alt="face" src={v.def} width={60} height={60} />
              <div className={styles.faceSectionText}>{v.text}</div>
            </div>
          ))}
        </div>
        <div className={styles.inputSection}>
          <div className={styles.inputSectionLabel}>더 나아질 수 있는 아이디어가 필요해요!</div>
          <textarea className={styles.inputSectionTextarea} placeholder="여러분의 의견을 들려주세요." rows={3} />
        </div>
        <div className={styles.buttonSection}>
          <button className={styles.submitButton} type="button">
            보내기
          </button>
          <button className={styles.closeButton} type="button" onClick={onClickBack}>
            취소하기
          </button>
        </div>
        <div className={styles.backButtonSection}>
          <Image
            className={styles.backButton}
            onClick={onClickBack}
            alt="close"
            src="svg/close.svg"
            width={24}
            height={24}
          />
        </div>
      </article>
    </div>
  );
}
