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
      {header && <h2 className="mb-3 font-semibold text-primary">{header}</h2>}
      <h3
        className={cn(
          'mb-4 text-center font-semibold text-3xl text-neutral-900 md:text-4xl',
          titleClassname
        )}
      >
        {title}
      </h3>
      {description && (
        <p
          className={cn(
            'mb-6 text-center text-lg text-neutral-600 md:text-xl',
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
