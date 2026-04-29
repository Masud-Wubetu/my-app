

const TypingIndicator = () => {
  return (
    <div className="self-start flex gap-1 px-3 py-3 bg-gray-200 rounded-xl">
      <Dot />
      <Dot className='[animaion-delay: 0.2s]' />
      <Dot className='[animaion-delay: 0.4s]' />
    </div>
  )
}

type DotProps = {
  className?: string
}

const Dot = ({ className }: DotProps) => (
  <div className={`w-2 h-2 rounded-full bg-gray-800 animate-pulse ${className}`}></div>
)

export default TypingIndicator