'use client';

import * as styles from './addModalTheme.css';
import onSubmit from '@/app/(beforeLogin)/_lib/addCourt';
import { useFormState, useFormStatus } from 'react-dom';
import cx from 'classnames';
import CheckBoxGroup from '@/app/(beforeLogin)/@modal/(.)map/_component/CheckboxGroup';
import Radio from '@/app/(beforeLogin)/@modal/(.)map/_component/Radio';
import BackButtonModal from '@/app/(beforeLogin)/_component/BackButtonModal';
import { useState } from 'react';
import SubmitButtonForm from '@/app/(beforeLogin)/_component/SubmitButtonForm';

export default function AddModal() {
  const [state, formAction] = useFormState(onSubmit, null);

  const [checkBoxValue, setCheckBoxValue] = useState({
    courtType: '',
    courtSize: '',
  });

  const onTrackableCheckBox = (key: string) => (value: string) => {
    setCheckBoxValue({ ...checkBoxValue, [key]: value });
  };

  return (
    <div className={styles.modal}>
      <article className={styles.container}>
        <h3 className={styles.title}>농구장 제보하기</h3>
        <h4 className={styles.subTitle}>서울 용산구 남영동 81-3</h4>
        <form className={styles.customForm} action={formAction}>
          <input
            className={cx(styles.customInput, styles.courtName)}
            type="text"
            placeholder="농구장 이름을 입력해주세요."
            name="courtName"
          />
          <div className={styles.customFormLayer}>
            <div>
              <label className={styles.customLabel}>코트 종류</label>
              <CheckBoxGroup
                data={['아스팔트', '우레탄', '고무', '모레', '폴리프로필렌(PP)', '알 수 없음']}
                onTrackable={onTrackableCheckBox('courtType')}
              />
              <input type="hidden" name="courtType" value={checkBoxValue.courtType} />
            </div>
            <div>
              <label className={styles.customLabel}>코트 사이즈</label>
              <CheckBoxGroup data={['풀 코트', '반 코트']} onTrackable={onTrackableCheckBox('courtSize')} />
              <input type="hidden" name="courtSize" value={checkBoxValue.courtSize} />
            </div>
            <div>
              <label className={styles.customLabel}>골대 수</label>
              <input className={styles.customInput} type="number" name="goalPost" placeholder="정보를 입력해주세요." />
            </div>
            <div>
              <label className={styles.customLabel}>사용료</label>
              <div className={styles.radioGroup}>
                <Radio data={{ key: '무료', value: '무료' }} name="feeYn" />
                <Radio data={{ key: '유료', value: '유료' }} name="feeYn" />
              </div>
            </div>
            <div>
              <label className={styles.customLabel}>주차 여부</label>
              <div className={styles.radioGroup}>
                <Radio data={{ key: '가능', value: '가능' }} name="parkYn" />
                <Radio data={{ key: '불가능', value: '불가능' }} name="parkYn" />
              </div>
            </div>
            <div>
              <label className={styles.customLabel}>기타 정보</label>
              <textarea
                className={styles.customTextarea}
                rows={3}
                placeholder="저녁 9시가 지나면 조명이 꺼져서 어두워요, 농구 골대 높이가 약간 낮은편이에요 등 자유롭게 적어주세요."
                name="comment"
              />
            </div>
          </div>
          <SubmitButtonForm text="추가하기" />
        </form>
        <BackButtonModal />
      </article>
    </div>
  );
}
