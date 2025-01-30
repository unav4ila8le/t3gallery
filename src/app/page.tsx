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

export default function HomePage() {
  return (
    <main className="p-4">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-64">
            <img
              src={image.url}
              alt="Image"
              className="h-auto max-h-64 w-full object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
