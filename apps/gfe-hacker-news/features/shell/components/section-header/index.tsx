type Props = {
  title: string;
  description: string;
};

export const SectionHeader: React.FC<Props> = (props) => {
  const { title, description } = props;
  return (
    <section className="container py-8">
      <h1 className="mb-2 font-semibold text-xl">{title}</h1>
      <p className="text-neutral-500 text-sm">{description}</p>
    </section>
  );
};
