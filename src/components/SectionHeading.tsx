interface Props {
  id: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ id, title, description }: Props) => (
  <div className="mx-auto mb-10 max-w-2xl text-center">
    <h2
      id={id}
      className="scroll-mt-24 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
    >
      {title}
    </h2>
    {description && (
      <p className="mt-3 text-base text-slate-600 dark:text-slate-400 sm:text-lg">
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
