'use client';

import * as styles from './searchInputTheme.css';
import { useSearchStore } from '@/app/store/search';
import Image from 'next/image';
import Search from '../../../../../../public/svg/search.svg';
import { ChangeEventHandler, KeyboardEventHandler, MouseEventHandler, useState } from 'react';
import cx from 'classnames';
import { usePathname } from 'next/navigation';

export default function SearchInput() {
  const { text, setForm } = useSearchStore();
  const pathname = usePathname();

  const [localText, setLocalText] = useState(text);

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setLocalText(event.target.value);
  };

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      setForm(localText);
    }
  };

  const onClickSearch: MouseEventHandler<HTMLImageElement> = (event) => {
    event.preventDefault();

    setForm(localText);
  };

  return (
    <div className={cx(styles.searchInputGroup, pathname === '/map/mode' && styles.searchInputGroupNone)}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="위치-장소를 검색하세요"
        onChange={onChange}
        value={localText}
        onKeyDown={onKeyDown}
      />
      <Image className={styles.searchImage} src={Search} alt="search" onClick={onClickSearch} />
    </div>
  );
}
