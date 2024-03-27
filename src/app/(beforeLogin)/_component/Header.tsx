import * as styles from './headerTheme.css';
import Image from 'next/image';
import HeaderLogo from '@/../public/img/logo-header.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <Image className={styles.headerImage} alt="headerLogo" src={HeaderLogo} />
    </header>
  );
}
