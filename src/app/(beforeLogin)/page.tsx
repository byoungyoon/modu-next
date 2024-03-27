import Link from 'next/link';
import Image from 'next/image';
import * as styles from './mainTheme.css';

import FooterLogo from '@/../public/img/logo-fotter.png';
import Layer1 from '@/../public/img/layer1.png';
import Layer2 from '@/../public/img/layer2.png';
import Layer3 from '@/../public/img/layer3.png';
import HeaderImage from '@/../public/img/header.png';

import Message from '@/../public/img/message.png';
import VisitedSectionSuspense from '@/app/(beforeLogin)/_component/VisitedSectionSuspense';
import { Suspense } from 'react';
import Loading from '@/app/(beforeLogin)/loading';
import SearchForm from '@/app/(beforeLogin)/_component/SearchForm';
import { searchSectionImage } from './mainTheme.css';
import Header from '@/app/(beforeLogin)/_component/Header';

export default function Main() {
  return (
    <main>
      <Header />
      <section className={styles.searchSection}>
        <article className={styles.searchSectionLayer}>
          <div>
            <h1 className={styles.searchSectionTitle}>우리 동네 야외 농구장 지도</h1>
            <h3 className={styles.searchSectionContent}>길거리 농구 유목민들이여,</h3>
            <h3 className={styles.searchSectionContent}>
              <span>모두의 농구장</span>에서
            </h3>
            <h3 className={styles.searchSectionContent}>내 주변의 농구장을 찾아보거라.</h3>
          </div>
          <SearchForm />
        </article>
        <Image className={searchSectionImage} alt="header" src={HeaderImage} />
      </section>
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
      <Suspense fallback={<Loading />}>
        <VisitedSectionSuspense />
      </Suspense>
      <section className={styles.feedbackSection}>
        <h3 className={styles.feedbackSectionTitle}>모두의 농구장이 도움이 되었나요?</h3>
        <p className={styles.feedbackSectionContent}>
          모두의 농구장을 이용하시는 모든 분들의 의견은 <br />
          서비스를 개선하는 데 도움이 됩니다.
        </p>
        <Image className={styles.feedbackSectionImage} src={Message} alt="message" />
        <Link href={'/feedback'}>
          <button className={styles.feedbackSectionButton} type="button" aria-label="big">
            피드백 남기기
          </button>
        </Link>
      </section>
      <footer className={styles.footer}>
        <div>
          <Image className={styles.footerImage} src={FooterLogo} alt="footer" />
          <p className={styles.footerText}>© 2023. Modubasketball. All rights reserved.</p>
        </div>
        <div className={styles.footerLayer}>
          <p className={styles.footerText}>Tel &nbsp;&nbsp; 0507-0178-0372</p>
          <p className={styles.footerText}>E-mail &nbsp;&nbsp; wonder.gwb@gmail.com</p>
        </div>
      </footer>
    </main>
  );
}
