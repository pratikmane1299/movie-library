export default function NotFound() {
  return (
    <div className="mt-24 mx-auto max-w-xs">
      <div className="flex flex-col items-center text-center">
        <h2 className="mb-1 md:mb-2 text-5xl md:text-7xl font-bold">404</h2>
        <span className="mb-3 md:mb-5 block text-lg md:text-2xl font-semibold">Movie not found...</span>
        <p className="text-sm md:text-lg font-medium leading-7 tracking-wide text-gray-300">
          The movie you are looking for, doesn't exists or might have been
          deleted.
        </p>
      </div>
    </div>
  );
}
