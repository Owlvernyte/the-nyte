import styles from './qr-maker.module.css';

/* eslint-disable-next-line */
export interface QrMakerProps {}

export function QrMaker(props: QrMakerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to QrMaker!</h1>
    </div>
  );
}

export default QrMaker;
