import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="p-4">
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex h-64 w-64 flex-col gap-2">
            <img
              src={image.url}
              alt="Image"
              width={256}
              height={256}
              className="h-full w-full object-cover"
            />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
