import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full max-h-full w-full max-w-full">
      <div className="flex flex-grow items-center justify-center">
        <img
          src={image.url}
          alt={image.name}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex w-80 flex-shrink-0 flex-col justify-center p-4">
        <h1 className="break-all text-xl font-bold">{image.name}</h1>
      </div>
    </div>
  );
}
