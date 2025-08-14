import { ReactNode, UIEventHandler, useRef, useImperativeHandle, forwardRef, useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

import styles from './index.module.scss'
import classNames from "classnames";

interface Props {
  autoHide?: boolean;
  children: ReactNode;
  className?: string;
  onScroll?: UIEventHandler;
}

export interface ScrollRef {
  scrollToTop: () => void
}

const Scrollbar = forwardRef((props: Props, ref) => {
  const { children, onScroll, autoHide, className } = props;
  const scrollbarRef = useRef<Scrollbars>(null);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useImperativeHandle(ref, () => ({
    scrollToTop: () => {
      if (scrollbarRef.current) {
        scrollbarRef.current.scrollToTop();
      }
    },
  }));

  if (!isClient) return null; 

  return (
    <Scrollbars
      ref={scrollbarRef}
      autoHide={autoHide}
      className={classNames(styles.scrollbars, className)}
      onScroll={onScroll}
    >
      {children}
    </Scrollbars>
  );
});

export default Scrollbar;
