import styles from './url-shortener.module.css';

/* eslint-disable-next-line */
export interface UrlShortenerProps {}

export function UrlShortener(props: UrlShortenerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UrlShortener!</h1>
    </div>
  );
}

export default UrlShortener;
