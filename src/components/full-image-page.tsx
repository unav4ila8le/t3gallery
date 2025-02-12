import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  return (
    <div className="flex h-full max-h-full w-full max-w-full">
      <div className="flex flex-grow items-center justify-center border-r border-white">
        <img
          src={image.url}
          alt={image.name}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex w-80 flex-shrink-0 flex-col gap-2 p-4">
        <h1 className="break-all text-lg font-bold">{image.name}</h1>
        <div>Created on: {new Date(image.createdAt).toLocaleDateString()}</div>
      </div>
    </div>
  );
}
