import { cn } from '@repo/design-system/lib/utils';

interface Props {
  header?: string;
  title: string;
  titleClassname?: string;
  description?: string;
}

export const SectionHeader: React.FC<Props> = (props) => {
  const { header, title, titleClassname, description } = props;
  return (
    <div className="text-center">
      {header && <h3 className="mb-3 font-semibold text-primary">{header}</h3>}
      <h2
        className={cn(
          'mb-4 text-center font-semibold text-3xl text-neutral-900 md:text-4xl',
          titleClassname
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mb-6 text-center text-lg text-neutral-600">
          {description}
        </p>
      )}
    </div>
  );
};
