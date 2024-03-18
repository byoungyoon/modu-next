import Link from 'next/link';
import * as styles from './mainTheme.css';

export default function Main() {
  return (
    <div className={styles.container}>
      <header>로고</header>
      <section>
        test <Link href={'/feedback'}>feedback</Link>
      </section>
      <aside>중간 글</aside>
      <aside>이미지</aside>
      <section>방문자</section>
      <section>피드백</section>
      <footer></footer>
    </div>
  );
}
