import { useRouter } from 'next/router';

const localeRTLList = ['ar', 'he'];
export function useIsRTL() {
  const { locale } = useRouter();
  if (locale && localeRTLList.includes(locale)) {
    return { isRTL: true, alignLeft: 'right', alignRight: 'left' };
  }
  return { isRTL: false, alignLeft: 'left', alignRight: 'right' };
}

export let languageMenu = [
  {
    id: 'en',
    name: 'English',
    value: 'en'
  },
  {
    id: 'kk',
    name: 'Қазақша',
    value: 'kk'
  },
  {
    id: 'ru',
    name: 'Русский',
    value: 'ru'
  }
];
