export default function ItemList({ title, items }) {
  return (
    <div className="flex flex-col justify gap-2">
    <h3 className="text-xl font-bold tracking-tight">{title}</h3>
    <div className="flex flex-row justify-stretch items-center gap-2 flex-wrap ms-2">
      {items.map(({ name, url }) => (
        <a className="text-gray-500 hover:text-blue-500 hover:underline transition-all duration-300" href={url}>{name}</a>
      ))}

      {/* <span className="text-gray-500">React</span>
      <span className="text-gray-500">Next.js</span>
      <span className="text-gray-500">TailwindCSS</span>
      <span className="text-gray-500">Django</span>
      <span className="text-gray-500">Flask</span> */}
    </div>
  </div>
  )
}