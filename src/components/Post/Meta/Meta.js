// @flow strict
import React from 'react';
import moment from 'moment';
import styles from './Meta.module.scss';

type Props = {
  date: string
};

const Meta = ({ date }: Props) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>こちらは {moment(date).format('YYYY/MM/DD')} の記事です。</p>
  </div>
);

export default Meta;
