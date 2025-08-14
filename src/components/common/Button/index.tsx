import classNames from "classnames";
import { ReactNode, useMemo } from "react"
import Loading from "../Loading";

interface Props {
  children: ReactNode,
  onClick?: () => void;
  size?: 'small' | 'large' | 'xl';
  type?: 'white' | 'primary' | 'warning' | 'blue' | 'sencondary';
  loading?: boolean;
  block?: boolean
  className?: string;
  disabled?: boolean
  onMouseEnter?: () => void
}

const OpenMindButton = (props: Props) => {
  const { children, onClick, size = 'default', type = 'primary', loading, block, className, disabled, onMouseEnter } = props

  const btnClass = useMemo(() => {
    return [size, type, loading && 'loading', block && 'full', className, disabled && 'disabled'].filter(Boolean).join(' ')
  }, [size, type, loading, block, className, disabled])

  const handleClick = () => {
    if (disabled || !onClick || loading) return
    onClick()
  }

  return (
    <div className={classNames("commonButton font-primary", btnClass)} onClick={handleClick} onMouseEnter={onMouseEnter}>
      {loading && (
        <Loading />
      )}
      <div className={classNames("flex-row-center h-full gap-[4px]")}>{children}</div>
    </div>
  )
}

export default OpenMindButton