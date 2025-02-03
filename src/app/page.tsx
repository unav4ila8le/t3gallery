import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockURLs = [
  "https://dyus64iz80.ufs.sh/f/310VPjIqXT1jbvNuFN73KLfnHD0TMSPgV7jovyRmF4UIYc2B",
  "https://dyus64iz80.ufs.sh/f/310VPjIqXT1jAlDwSj0gWtwilRsuHeSvO96PhUYXJLKr2afz",
  "https://dyus64iz80.ufs.sh/f/310VPjIqXT1jM7FA6ZxzfauEoMSYAxVcwm46Z7le3b0QhIgk",
  "https://dyus64iz80.ufs.sh/f/310VPjIqXT1j64NDLysLblSCTzUxQy9fhVXEqurJ8KYM0Zti",
  "https://dyus64iz80.ufs.sh/f/310VPjIqXT1j64ZV0KsLblSCTzUxQy9fhVXEqurJ8KYM0Zti",
];

const mockImages = mockURLs.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="p-4">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="h-64 w-64">
            <Image
              src={image.url}
              alt="Image"
              width={256}
              height={256}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
