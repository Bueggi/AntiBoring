import { CameraIcon } from "@heroicons/react/solid";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";

export default function Statistics({ influencer }) {
  const labels = Object.keys(influencer.stats.demographics);
  const data = Object.values(influencer.stats.demographics);

  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Weitere Informationen
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Über {influencer.name}
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none align-center items-center content-center justify-center justify-items-center">
              <figure>
                <h2 className="text-base font-semibold tracking-wide uppercase mx-auto place-self-center">
                  Demographics von {influencer.name}
                </h2>
                <Pie
                  datasetIdKey="id"
                  data={{
                    labels: labels,
                    datasets: [
                      {
                        label: "Demographics des Influencers",
                        data: data,
                        backgroundColor: [
                          "rgb(255, 99, 132)",
                          "rgb(54, 162, 235)",
                          "rgb(255, 205, 86)",
                          "rgb(214, 19, 136)",
                          "rgb(187, 243, 123)",
                        ],
                      },
                    ],
                  }}
                ></Pie>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">{influencer.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
