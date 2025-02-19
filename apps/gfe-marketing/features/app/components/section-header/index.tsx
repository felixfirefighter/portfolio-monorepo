import { cn } from '@repo/design-system/lib/utils';

interface Props {
  header?: string;
  title: string;
  titleClassname?: string;
  description?: string;
  descriptionClassName?: string;
}

export const SectionHeader: React.FC<Props> = (props) => {
  const { header, title, titleClassname, description, descriptionClassName } =
    props;
  return (
    <div className="text-center">
      {header && <h3 className="mb-3 font-semibold text-primary">{header}</h3>}
      <h2
        className={cn(
          'mb-4 text-center font-semibold text-4xl text-neutral-900 lg:text-5xl',
          titleClassname
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mb-6 text-center text-lg text-neutral-600',
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
