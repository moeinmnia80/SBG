import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div
      className={`flex items-center justify-center w-full h-svh dark:bg-[#1a1a1d]`}
    >
      <div className="text-center">
        <p className="text-base font-semibold dark:text-[#C62128]">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight dark:text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 dark:text-white">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md dark:bg-[#C62128] px-3.5 py-2.5 text-sm font-semibold dark:text-[#1a1a1d]"
          >
            Go back home
          </Link>
          <a href="#" className="text-sm font-semibold dark:text-[#C62128]">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};
