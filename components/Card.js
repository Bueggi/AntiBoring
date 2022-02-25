import Link from "next/link";

const Card = ({ heading, image, id, tags, description }) => {
  const color = {
    food: "bg-green-300",
    cars: "bg-blue-300",
    fmcg: "bg-red-300",
    travel: "bg-yellow-300",
  };
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/project/${id}`}>
        <a>
          <img className="rounded-t-lg aspect-square" src={image} alt="" />
        </a>
      </Link>
      <div className="p-5">
        <Link href={`/project/${id}`}>
          <a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
              {heading}
            </h5>
          </a>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">
          {description}
        </p>
        <Link href={`/project/${id}`}>
          <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Mehr erfahren
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </Link>
        <p className="mt-4 text-sm text-gray-500">
          {tags.map((tag) => {
            const tagcolor = color[tag];
            return (
              <span
                key={tag}
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tagcolor} text-gray-800 mx-2`}
              >
                {tag}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default Card;
