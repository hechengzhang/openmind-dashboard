

const LooginFooter = () => {
  return (
    <div className="fixed left-0 bottom-0 px-[44px] pb-[24px] w-full z-[3]">
      <div className="flex-row-center-between text-[14px] leading-[20px] text-secondary">
        <div>© 2025 OpenMind. All Rights Reserved.</div>
        <div className="flex gap-[30px]">
          <a href="mailto:hello@openmind.org" target="_blank" className="cursor-pointer text-hover-underline duration-300 hover:text-primary">Support</a>
          <a href='https://openmind.org/privacy' target="_blank" className="cursor-pointer text-hover-underline duration-300 hover:text-primary">Privacy</a>
          <a href='https://openmind.org/terms' target="_blank" className="cursor-pointer text-hover-underline duration-300 hover:text-primary">Terms</a>
        </div>
      </div>
    </div>
  )
}

export default LooginFooter