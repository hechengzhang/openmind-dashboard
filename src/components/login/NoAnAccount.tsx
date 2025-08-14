import { Link } from "react-router-dom"

const NoAnAccount = () => {
  return (
    <div className="text-center mt-[56px] text-[14px] leading-[18px] font-[500]">
      <span className="text-secondary">Don’t have an account? </span>
      <Link to='/openmind/sign-up' className="text-blue text-hover-underline">Sign up</Link>
    </div>
  )
}

export default NoAnAccount