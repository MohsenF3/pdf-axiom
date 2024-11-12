interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="space-y-3">
      <h6 className="text-2xl font-semibold sm:text-3xl">{title}</h6>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
