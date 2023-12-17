import classNames from 'classnames'

const PaginationIcon = ({
  color = '#000F51',
  rotate = 180,
  last_icon = false,
  last_icon_position = 'left',
  rotate_degree,
}) => {
  const rotateClass = rotate === true ? 'rotate-180' : ''
  const rotateClassFinal = rotate_degree ? `rotate-${rotate_degree}` : rotateClass

  const lastIcon =
    last_icon === true ? (
      <path d="M16.3779 19L16.3779 5L18.3779 5L18.3779 19L16.3779 19Z" fill={color} />
    ) : (
      'asdf'
    )

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="red"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(rotateClassFinal)}
    >
      {last_icon_position === 'left' ? lastIcon : ''}
      <path
        d="M10.5496 12.0002L5.59961 7.05023L7.01361 5.63623L13.3776 12.0002L7.01361 18.3642L5.59961 16.9502L10.5496 12.0002Z"
        fill={color}
      />
      {last_icon_position === 'right' ? lastIcon : ''}
    </svg>
  )
}

export default PaginationIcon
