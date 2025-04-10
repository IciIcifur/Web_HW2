export default function ErrorCard({ error }: { error: string }) {
  return (
    <div className="flex flex-col w-32 gap-1 border border-red-400 rounded-xl">
      <h2 className="text-red-500">Can not load data</h2>
      <p className="text-neutral-500">{error}</p>
      <p className="flex w-full text-end">Please, reload the page</p>
    </div>
  );
}
