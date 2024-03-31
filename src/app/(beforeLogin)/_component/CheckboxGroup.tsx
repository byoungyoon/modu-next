import { useState } from 'react';
import * as styles from './checkBoxGroupTheme.css';

import Checked from '@/../public/svg/checked.svg';
import UnChecked from '@/../public/svg/unChecked.svg';
import cx from 'classnames';
import Image from 'next/image';

type Props = {
  data: string[];

  defaultValue?: string;
  onTrackable?: (key: string) => void;

  readonly?: boolean;
};

export default function CheckBoxGroup({ data, defaultValue = '', onTrackable = () => {}, readonly }: Props) {
  const [localChecked, setLocalChecked] = useState(defaultValue);

  const onClick = (key: string) => () => {
    setLocalChecked(key);
    onTrackable(key);
  };

  return (
    <article className={styles.container}>
      {data.map((datum) => (
        <div key={datum} className={cx(styles.layer, readonly && styles.layerReadonly)} onClick={onClick(datum)}>
          <input
            className={cx(styles.layerInput, localChecked === datum && styles.layerInputChecked)}
            type="text"
            defaultValue={datum}
          />
          <Image className={styles.layerImage} src={localChecked === datum ? Checked : UnChecked} alt={datum} />
        </div>
      ))}
    </article>
  );
}
