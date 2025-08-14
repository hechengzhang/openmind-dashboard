import { Link } from "react-router-dom"

const HaveAnAccount = () => {
  return (
    <div className="text-center mt-[56px] text-[14px] leading-[18px] font-[500] text-secondary">
      <span>Already have an account? </span>
      <Link to="/openmind/sign-in" className="text-blue text-hover-underline">
        Log in
      </Link>
    </div>
  )
}

export default HaveAnAccount