interface Item {
    name: string;
    url: string;
}

interface ItemListProps {
    title: string;
    items: Item[];
}

export default function ItemList({ title, items }: ItemListProps) {
    return (
      <div className="flex flex-col justify gap-2">
      <h3 className="text-xl font-bold tracking-tight">{title}</h3>
      <div className="flex flex-row justify-stretch items-center gap-2 flex-wrap ms-2">
        {items.map(({ name, url }) => (
          <a className="text-gray-500 hover:text-blue-500 hover:underline transition-all duration-300" href={url} style={{
            // glow around the text (not only border)
            textShadow: `0 0 10px rgba(59, 130, 246, 0.5)`,
            transition: 'text-shadow 0.2s'
          }}>
            {name}
          </a>
        ))}
      </div>
    </div>
    )
  }