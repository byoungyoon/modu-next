'use client';

import * as styles from './actionModalTheme.css';
import cx from 'classnames';
import CheckBoxGroup from '@/app/(beforeLogin)/_component/CheckboxGroup';
import Radio from '@/app/(beforeLogin)/_component/Radio';
import SubmitButtonForm from '@/app/(beforeLogin)/_component/SubmitButtonForm';
import BackButtonModal from '@/app/(beforeLogin)/_component/BackButtonModal';
import { Court } from '@/app/model/court';
import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

type Props = {
  title: string;
  value: Court;
  formAction?: () => void;

  readonly?: boolean;
};

export default function ActionModal({ title, value, formAction, readonly }: Props) {
  const [checkBoxValue, setCheckBoxValue] = useState({
    courtType: value.courtType ?? '알 수 없음',
    courtSize: value.courtSize ?? '반코트',
  });
  const params = useParams<{ id: string }>();

  const onTrackableCheckBox = (key: string) => (value: string) => {
    setCheckBoxValue({ ...checkBoxValue, [key]: value });
  };

  return (
    <div className={styles.modal}>
      <article className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.subTitleLayer}>
          <h4 className={styles.subTitle}>{value.address}</h4>
          {readonly && (
            <Link className={styles.updateLink} href={`/map/detail/${params.id}/update`}>
              정보 수정하기
            </Link>
          )}
        </div>
        <form className={styles.customForm} action={formAction}>
          <input name="id" type="hidden" value={value.id} />
          <input name="address" type="hidden" value={value.address ?? ''} />
          <input name="lat" type="hidden" value={value.lat} />
          <input name="lon" type="hidden" value={value.lon} />
          <input
            className={cx(styles.customInput, styles.courtName)}
            type="text"
            placeholder="농구장 이름을 입력해주세요."
            name="courtName"
            defaultValue={value.courtName ?? ''}
            readOnly={readonly}
          />
          <div className={styles.customFormLayer}>
            <div>
              <label className={styles.customLabel}>코트 종류</label>
              <CheckBoxGroup
                data={['아스팔트', '우레탄', '고무', '모레', '폴리프로필렌(PP)', '알 수 없음']}
                onTrackable={onTrackableCheckBox('courtType')}
                defaultValue={checkBoxValue.courtType}
                readonly={readonly}
              />
              <input type="hidden" name="courtType" value={checkBoxValue.courtType} />
            </div>
            <div>
              <label className={styles.customLabel}>코트 사이즈</label>
              <CheckBoxGroup
                data={['풀코트', '반코트']}
                onTrackable={onTrackableCheckBox('courtSize')}
                defaultValue={checkBoxValue.courtSize}
                readonly={readonly}
              />
              <input type="hidden" name="courtSize" value={checkBoxValue.courtSize} />
            </div>
            <div>
              <label className={styles.customLabel}>골대 수</label>
              <input
                className={styles.customInput}
                type="number"
                name="goalPost"
                placeholder="정보를 입력해주세요."
                defaultValue={value.goalPost ?? 1}
                readOnly={readonly}
              />
            </div>
            <div>
              <label className={styles.customLabel}>사용료</label>
              <div className={styles.radioGroup}>
                <Radio
                  data={{ key: '무료', value: '무료' }}
                  name="feeYn"
                  defaultChecked={value.feeYn === '무료'}
                  readonly={readonly}
                />
                <Radio
                  data={{ key: '유료', value: '유료' }}
                  name="feeYn"
                  defaultChecked={value.feeYn === '유료'}
                  readonly={readonly}
                />
              </div>
            </div>
            <div>
              <label className={styles.customLabel}>주차 여부</label>
              <div className={styles.radioGroup}>
                <Radio
                  data={{ key: '가능', value: '가능' }}
                  name="parkYn"
                  defaultChecked={value.parkYn === '가능'}
                  readonly={readonly}
                />
                <Radio
                  data={{ key: '불가능', value: '불가능' }}
                  name="parkYn"
                  defaultChecked={value.parkYn === '불가능'}
                  readonly={readonly}
                />
              </div>
            </div>
            <div>
              <label className={styles.customLabel}>기타 정보</label>
              <textarea
                className={styles.customTextarea}
                rows={3}
                placeholder="저녁 9시가 지나면 조명이 꺼져서 어두워요, 농구 골대 높이가 약간 낮은편이에요 등 자유롭게 적어주세요."
                name="comment"
                defaultValue={value.comment ?? ''}
                readOnly={readonly}
              />
            </div>
          </div>
          {!readonly && <SubmitButtonForm text="저장하기" />}
        </form>
        <BackButtonModal />
      </article>
    </div>
  );
}
