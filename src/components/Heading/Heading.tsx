import { clsx } from 'clsx';
import { Icon } from '../Icon/Icon';

interface HeadingProps {
  icon: JSX.Element;
  text: string;
  className?: string;
}

export const Heading = ({ icon, text, className}: HeadingProps) => {
  return (
    <div className='flex gap-2 items-center grow'>
      <Icon element={icon} />
      <h2 title={text} className={clsx('text-violet-600 font-bold text-lg leading-tight text-pretty grow', className)}>
        {text}
      </h2>
    </div>
  );
}