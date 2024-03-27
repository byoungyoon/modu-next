import * as styles from './radioTheme.css';

type Props = {
  data: {
    key: string;
    value: string;
  };
  name: string;

  checked?: boolean;
};

export default function Radio({ data, name, checked }: Props) {
  return (
    <label className={styles.radioBox} htmlFor={data.key}>
      <input className={styles.radio} type="radio" id={data.key} name={name} value={data.key} />
      <span className={styles.on} />
      <span className={styles.radioText}>{data.value}</span>
    </label>
  );
}
