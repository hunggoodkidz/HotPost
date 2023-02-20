import React from 'react'
import classNames from "classnames/bind";
import styles from "./NotFound.css";


const cx = classNames.bind(styles);

export const NotFound = () => {
  return (
    <div className={cx('container')}>
        <h2 className={cx('not-found')}>404 | Not Found</h2>
    </div>
  )
}
