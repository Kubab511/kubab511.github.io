import { motion } from "framer-motion";
import { MouseEventHandler } from "react";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" }
}

type Item = {
  active: boolean,
  selectTab: MouseEventHandler,
  children: string[]
}

export function Button({ active, selectTab, children }: Item) {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]"

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-sky-500 mt-1 mr-3"
      ></motion.div>
    </button>
  )
}