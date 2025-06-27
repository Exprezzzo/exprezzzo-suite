// /app/category/[id]/page.tsx
export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Category: {id}</h1>
    </div>
  );
}