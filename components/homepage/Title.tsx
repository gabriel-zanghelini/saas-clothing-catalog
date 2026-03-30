import { merriweather } from '../fonts'

interface TitleProps {
  title: string
}

export default function Title({ title }: TitleProps) {
  return (
    <h2
      className={`text-2xl font-bold mb-8 text-center ${merriweather.className} text-gray-600 border-b border-gray-200 py-2`}
    >
      {title}
    </h2>
  )
}
