type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <ul className='flex gap-5 p-3 mb-3'>
      {categories.map((category) => (
        <li
          className={`${
            selected === category ? 'text-blue-900' : 'text-gray-500'
          } font-bold uppercase cursor-pointer hover:text-blue-900`}
          key={category}
          onClick={() => onClick(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
}
