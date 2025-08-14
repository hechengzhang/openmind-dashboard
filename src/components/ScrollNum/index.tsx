import { useEffect, useState, useRef, CSSProperties, useMemo, Fragment } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";

const numberList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

/**
 * Number scroll animation
 * @param props.value target value 
 * @param props.delay stop animation delay time
 * @param props.start start animation
 */
const ScrollNum = ({ value, height } : { value: number, height: number }) => {
  const countList = useMemo(() => {
    return value.toLocaleString().split('')
  }, [value])

  return (
    <div className="flex">
      {countList.map((item, index) => (
        <Fragment key={index}>
          {item === ','? (
            <span>,</span>
          ) : (
            <ScrollNumItem value={Number(item)} index={index} height={height} />
          )}
        </Fragment>
      ))}
    </div>
  )
}

const ScrollNumItem = (props: { value: number; index: number; height: number; }) => {
  const { value, index, height } = props
  const [step, setStep] = useState(0);
  const numRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setStep(1)
    }, index * 100)

    setTimeout(() => {
      setStep(2)
    }, 500 + index * 100)
  
    return () => {
      setStep(0)
    };
  }, [index]);

  const scrollStyle = {
    "--num": value,
    "--itemHeight": - (1 / numberList.length * 100).toFixed(2) + '%',
    height,
  } as CSSProperties;

  return (
    <div className={classNames(styles.scrollBox, styles.borderAnimate)} style={scrollStyle}>
      <ul ref={numRef} className={classNames(styles.scrollNum, {[styles.animate1]: step === 1, [styles.animate2]: step === 2 })}>
        {numberList.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollNum