import { clsx } from 'clsx';
import { Icon } from '../Icon/Icon';

interface HeadingProps {
  icon: JSX.Element;
  text: string;
  className?: string;
}

export const Heading = ({ icon, text, className}: HeadingProps) => {
  return (
    <div className='flex gap-1 items-center'>
      <Icon element={icon} />
      <h2 className={clsx('text-violet-600 font-bold text-lg', className)}>
        {text}
      </h2>
    </div>
  );
}