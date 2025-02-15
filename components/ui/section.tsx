export default function PublicSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen px-4 items-center justify-center bg-gray-100 dark:bg-gray-900">
      {children}
    </div>
  );
}
