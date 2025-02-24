import { RiCheckLine } from '@remixicon/react';

interface Props {
  items: string[];
}

export const FeatureListItems: React.FC<Props> = (props) => {
  const { items } = props;
  return (
    <ul className="mt-4 space-y-4 text-neutral-600">
      {items.map((item) => (
        <li key={item} className="flex items-center space-x-2">
          <RiCheckLine className="h-6 w-6 flex-shrink-0 flex-grow-0 rounded-full bg-primary/10 p-1 text-primary" />{' '}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};
