import Link from 'next/link';
import Image from 'next/image';
import * as styles from './mainTheme.css';

import HeaderLogo from '@/../public/img/logo-header.png';
import FooterLogo from '@/../public/img/logo-fotter.png';
import Layer1 from '@/../public/img/layer1.png';
import Layer2 from '@/../public/img/layer2.png';
import Layer3 from '@/../public/img/layer3.png';

export default function Main() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image className={styles.headerImage} alt="headerLogo" src={HeaderLogo} />
      </header>
      <section></section>
      <section className={styles.infoSection}>
        <article>
          <div className={styles.infoSectionLayer}>
            <Image className={styles.infoSectionLayerImage} alt="infoSectionImage" src={Layer1} />
          </div>
          <div className={styles.infoSectionLayerText}>
            <h3 className={styles.infoSectionTitle}>야외 농구장 찾기</h3>
            <p className={styles.infoSectionContent}>
              내 주변에 야외 농구장이 어디 있는지 혹은 야외 농구장이 있는지 궁금한 지역을 검색해보세요.
            </p>
          </div>
        </article>
        <article>
          <div className={styles.infoSectionLayer}>
            <Image className={styles.infoSectionLayerImage} alt="infoSectionImage" src={Layer2} />
          </div>
          <div className={styles.infoSectionLayerText}>
            <h3 className={styles.infoSectionTitle}>농구장의 상세한 정보 확인</h3>
            <p className={styles.infoSectionContent}>
              코트의 종류와 사이즈, 골대의 개수, 사용료 등 야외 농구장을 이용할 때 필요한 정보들을 확인할 수 있어요.
            </p>
          </div>
        </article>
        <article>
          <div className={styles.infoSectionLayer}>
            <Image className={styles.infoSectionLayerImage} alt="infoSectionImage" src={Layer3} />
          </div>
          <div className={styles.infoSectionLayerText}>
            <h3 className={styles.infoSectionTitle}>농구장 제보하기</h3>
            <p className={styles.infoSectionContent}>
              모두의 농구장은 길거리 농구인들이 직접 제보한 농구장 정보가 실시간으로 반영되어 빠르고 정확합니다.
            </p>
          </div>
        </article>
      </section>
      <aside className={styles.aside}>
        <div className={styles.asideImage} />
      </aside>
      <section>방문자</section>
      <section>피드백</section>
      <footer></footer>
    </div>
  );
}
