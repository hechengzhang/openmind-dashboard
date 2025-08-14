import ErrorSvg from '@/assets/images/login/error.svg?react'
import SuccessSvg from '@/assets/images/login/success.svg?react'
import classNames from 'classnames'

const LoginFormTips = ({ text, className, type = 'error' } : { text: string, className?: string, type?: 'success' | 'error' }) => {
  return (
    <div className={classNames("rounded-[8px] p-[8px] flex gap-[8px]", className, type === 'error' ? 'bg-error/10' : 'bg-success/10')}>
      <div className="w-[16px] h-[16px] flex-shrink-0">
        {type === 'error'? <ErrorSvg /> : <SuccessSvg/>}
      </div>
      <div className={classNames('text-[12px] leading-[16px]', type === 'error' ? 'text-error' : 'text-success')}>{text}</div>
    </div>
  )
}

export default LoginFormTips