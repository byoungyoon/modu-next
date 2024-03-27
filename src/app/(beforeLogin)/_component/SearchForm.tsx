'use client';

import * as styles from './searchFormTheme.css';
import Image from 'next/image';

import Search from '@/../public/svg/search.svg';
import { searchButton } from './searchFormTheme.css';
import { useRouter } from 'next/navigation';
import { KeyboardEventHandler, MouseEventHandler, useRef } from 'react';
import { useSearchStore } from '@/app/store/search';

export default function SearchForm() {
  const router = useRouter();
  const { setForm } = useSearchStore();

  const inputRef = useRef<HTMLInputElement>(null);

  const onSearch = (text: string) => {
    setForm(text);

    router.push('/map/view');
  };

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    event.stopPropagation();

    if (event.key === 'Enter') {
      onSearch(inputRef.current?.value ?? '');
    }
  };

  const onClickSearch: MouseEventHandler<HTMLImageElement> = (event) => {
    event.preventDefault();

    onSearch(inputRef.current?.value ?? '');
  };

  const onClickButton = () => {
    onSearch('');
  };

  return (
    <div>
      <div className={styles.searchInputGroup}>
        <input
          ref={inputRef}
          className={styles.searchInput}
          type="text"
          placeholder="위치-장소를 검색하세요"
          onKeyDown={onKeyDown}
        />
        <Image className={styles.searchImage} src={Search} alt="search" onClick={onClickSearch} />
      </div>
      <button className={searchButton} type="button" onClick={onClickButton}>
        내 주변 농구장 찾기
      </button>
    </div>
  );
}
