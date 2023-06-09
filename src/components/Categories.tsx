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
            selected === category
              ? 'text-blue-900 dark:text-blue-500'
              : 'text-gray-500 dark:text-gray-300'
          } font-bold uppercase cursor-pointer hover:text-blue-900 dark:hover:text-blue-500`}
          key={category}
          onClick={() => onClick(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
}
