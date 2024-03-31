import * as styles from './radioTheme.css';
import cx from 'classnames';

type Props = {
  data: {
    key: string;
    value: string;
  };
  name: string;

  defaultChecked?: boolean;
  readonly?: boolean;
};

export default function Radio({ data, name, defaultChecked, readonly }: Props) {
  return (
    <label className={cx(styles.radioBox, readonly && styles.radioBoxReadonly)} htmlFor={data.key}>
      <input
        className={styles.radio}
        type="radio"
        id={data.key}
        name={name}
        value={data.key}
        defaultChecked={defaultChecked}
      />
      <span className={styles.on} />
      <span className={styles.radioText}>{data.value}</span>
    </label>
  );
}
