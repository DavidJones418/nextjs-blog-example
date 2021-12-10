import type { ReactNode, VFC } from 'react'

const Card: VFC<{
  href: string
  title: string
  children: ReactNode
}> = (props) => {
  return (
    <a
      href={props.href}
      className="
        m-4 p-6 text-left border rounded-lg transition-colors max-w-xs
        hover:text-blue-600 hover:border-blue-600
        focus:text-blue-600 focus:border-blue-600
        active:text-blue-600 active:border-blue-600
      "
    >
      <h2 className="mb-4 text-2xl font-bold">{props.title} &rarr;</h2>
      <p className="text-xl">{props.children}</p>
    </a>
  )
}

export default Card
