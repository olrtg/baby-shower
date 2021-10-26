import { FunctionComponent, useState } from 'react';
import { Italic } from './utils/italic';

type Props = {
  name: string;
  description: string;
  available: number;
};

export const Product: FunctionComponent<Props> = ({
  name,
  description,
  available,
}) => {
  const [count, setCount] = useState(0);
  const difference = available - count;

  const add = () => difference > 0 && setCount(count + 1);

  const remove = () => count > 0 && setCount(count - 1);

  return (
    <div className="border-2 border-pink-900 rounded-xl">
      <div className="p-4">
        <div className="flex justify-end">
          <span className="p-1 text-sm leading-none bg-pink-900 rounded-md text-pink-50">
            Quedan <strong>{difference}</strong>
          </span>
        </div>
        <div>
          <h2 className="text-xl">
            <Italic>{name}</Italic>
          </h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="flex border-t-2 border-pink-900 divide-x-2 divide-pink-900">
        <button
          onClick={remove}
          className="w-1/3 p-2 text-lg font-bold rounded-bl-xl"
        >
          -
        </button>
        <span className="flex items-center justify-center w-1/3 p-2 leading-none">
          {count}
        </span>
        <button
          onClick={add}
          className="w-1/3 p-2 text-lg font-bold rounded-br-xl"
        >
          +
        </button>
      </div>
    </div>
  );
};
