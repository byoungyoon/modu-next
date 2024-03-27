'use client';

import { SyntheticEvent, useState } from 'react';
import Image from 'next/image';
import * as styles from './feedbackModalTheme.css';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';

import Face1Default from '@/../public/img/face-1-default.png';
import Face2Default from '@/../public/img/face-2-default.png';
import Face3Default from '@/../public/img/face-3-default.png';
import Face4Default from '@/../public/img/face-4-default.png';
import Face5Default from '@/../public/img/face-5-default.png';
import Face1Pressed from '@/../public/img/face-1-pressed.png';
import Face2Pressed from '@/../public/img/face-2-pressed.png';
import Face3Pressed from '@/../public/img/face-3-pressed.png';
import Face4Pressed from '@/../public/img/face-4-pressed.png';
import Face5Pressed from '@/../public/img/face-5-pressed.png';

import { spin } from '@/app/animation.css';
import Ball from '@/../public/img/layer1.png';
import BackButtonModal from '@/app/(beforeLogin)/_component/BackButtonModal';
import SubmitButtonForm from '@/app/(beforeLogin)/_component/SubmitButtonForm';

const face = [
  {
    def: Face1Default,
    pre: Face1Pressed,
    text: '최고예요',
  },
  {
    def: Face2Default,
    pre: Face2Pressed,
    text: '좋아요',
  },
  {
    def: Face3Default,
    pre: Face3Pressed,
    text: '만족해요',
  },
  {
    def: Face4Default,
    pre: Face4Pressed,
    text: '별로예요',
  },
  {
    def: Face5Default,
    pre: Face5Pressed,
    text: '싫어요',
  },
];

export default function FeedbackModal() {
  const router = useRouter();
  const [faceNum, setFaceNum] = useState(0);
  const localFace = face;

  const mutation = useMutation({
    mutationFn: async (event: SyntheticEvent<HTMLFormElement>) => {
      event.preventDefault();
      const target = event.target as typeof event.target & {
        text: { value: string };
      };

      const formData = new FormData();
      formData.append('text', target.text.value);
      formData.append('face', `${faceNum}`);

      return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/feedback`, {
        method: 'post',
        credentials: 'include',
        body: formData,
      }).then((response) => {
        if (response.ok) return response.json();

        throw response;
      });
    },
    onSuccess(response) {
      console.info(response);

      router.replace('/success/feedback');
    },
    onError(error) {
      console.error(error);
      alert('전송 과정에서 오류가 발생하였습니다.');
    },
  });

  const onFaceClick = (num: number) => () => {
    setFaceNum(faceNum === num ? 0 : num);
  };

  const onClickBack = () => {
    router.back();
  };

  return (
    <div className={styles.modal}>
      <article className={styles.container}>
        <div className={styles.title}>여러분의 의견을 들려주세요!</div>
        <div className={styles.subTitle}>모두의 농구장이 도움이 되었나요?</div>
        <form onSubmit={mutation.mutate}>
          <div className={styles.faceSection}>
            {localFace.map((v, index) => (
              <div className={styles.faceSectionItem} key={index}>
                <Image
                  className={styles.faceSectionImage}
                  alt="face"
                  src={faceNum === index + 1 ? v.pre : v.def}
                  onClick={onFaceClick(index + 1)}
                />
                <div className={styles.faceSectionText}>{v.text}</div>
              </div>
            ))}
          </div>
          <div className={styles.inputSection}>
            <div className={styles.inputSectionLabel}>더 나아질 수 있는 아이디어가 필요해요!</div>
            <textarea
              name="text"
              className={styles.inputSectionTextarea}
              placeholder="여러분의 의견을 들려주세요."
              rows={3}
            />
          </div>
          <SubmitButtonForm isActive={faceNum !== 0} text="보내기" />
        </form>
        <BackButtonModal />
        {mutation.isPending && (
          <div className={styles.loading}>
            <Image className={spin} src={Ball} alt="ball" />
          </div>
        )}
      </article>
    </div>
  );
}
