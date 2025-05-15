import { motion } from "framer-motion"

function ThemeToggle() {
  const { isDark, toggleDark } = useDark()
  return (
    <li onClick={toggleDark} className="cursor-pointer [&_*]:cursor-pointer transition-all">
      <span className={$("inline-block", isDark ? "i-ph-moon-stars-duotone" : "i-ph-sun-dim-duotone")} />
      <span>
        {isDark ? "浅色模式" : "深色模式"}
      </span>
    </li>
  )
}

export function Menu() {
  const [shown, show] = useState(false)
  return (
    <span className="relative" onMouseEnter={() => show(true)} onMouseLeave={() => show(false)}>
      <span className="flex items-center scale-90">
        <button type="button" className="btn i-si:more-muted-horiz-circle-duotone" />
      </span>
      {shown && (
        <div className="absolute right-0 z-99 bg-transparent pt-4 top-4">
          <motion.div
            id="dropdown-menu"
            className={$([
              "w-200px",
              "bg-primary backdrop-blur-5 bg-op-70! rounded-lg shadow-xl",
            ])}
            initial={{
              scale: 0.9,
            }}
            animate={{
              scale: 1,
            }}
          >
            <ol className="bg-base bg-op-70! backdrop-blur-md p-2 rounded-lg color-base text-base">
              <li onClick={() => window.open("https://ztr8.online/")} className="cursor-pointer [&_*]:cursor-pointer transition-all">
                <span className="i-ph:link-duotone inline-block" />
                <span>未来已到</span>
              </li>
              <ThemeToggle />
            </ol>
          </motion.div>
        </div>
      )}
    </span>
  )
}
