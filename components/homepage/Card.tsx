interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  isSelected?: boolean
}

const Card: React.FC<CardProps> = ({ isSelected = false, ...props }) => {
  const { children, className } = props

  const combinedClassName = `p-6 rounded-lg shadow-lg flex flex-col justify-between text-center border-2 ${isSelected ? ' border-secondary-300' : 'border-gray-100'} ${className ?? ''}`

  return (
    <article {...props} className={combinedClassName}>
      {children}
    </article>
  )
}

export default Card
