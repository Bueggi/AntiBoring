import Layout from "../../components/Layout";
import Deliverables from "../../components/pageComponents/deliverables";
import Product from "../../components/pageComponents/product";
import Statistics from "../../components/pageComponents/statistics";
import projects from "../../mockups/projects.json";

export default function Home({ id }) {
  const project = projects.filter((project) => project.id == id)[0] || {
    id: 1,
    projectname: "Große Snowboardtour mit Freunden",
    description:
      "Felix von der Laden möchte Snowboard fahren gehen. Mit seinen Freunden möchte er den besten Trip in den Schnee seit langer Zeit haben. Corona hat ihm diesen Trip verwehrt. Aber da jetzt die Pisten wieder geöffnet sind, will er mit dem Board durch den Neuschnee brettern. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis cras sed felis eget velit aliquet sagittis id. Viverra nibh cras pulvinar mattis. Aliquam ut porttitor leo a. Diam quam nulla porttitor massa id. Non odio euismod lacinia at. Mi sit amet mauris commodo quis imperdiet massa. Netus et malesuada fames ac turpis egestas sed tempus. Quis varius quam quisque id diam vel quam elementum. Viverra tellus in hac habitasse.",
    price: 1500000,
    href: "#",
    featureImg:
      "https://i.pinimg.com/originals/d1/20/51/d12051ef166e5a2e5dd1b9437770b909.jpg",
    projectImg: [
      "https://cdn.europosters.eu/image/1300/posters/snowboard-flip-i96988.jpg",
      "https://www.vocenaneve.com.br/app/uploads/2021/09/snowboard.jpg",
    ],
    detailDescription:
      "Niemand liebt Schnee so sehr wie Felix. Der Rennprofi ist schon im Alter von 7 Jahren das erste Mal mit einem Board in Österreich durch die Berge gefahren.",
    tags: ["cars", "food", "travel"],
    influencer: {
      name: "Felix von der Laden",
      gender: "male",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2d/Felix_Von_der_Laden_1080.png",
      description:
        "Vlogs | Autos | Racing | Technik | Reisen / Hey ich bin Felix und hier zeige ich euch mein Leben! / Gaming/Let's Plays gibt's weiterhin hier: https://www.youtube.com/dner Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis cras sed felis eget velit aliquet sagittis id. Viverra nibh cras pulvinar mattis. Aliquam ut porttitor leo a. Diam quam nulla porttitor massa id. Non odio euismod lacinia at. Mi sit amet mauris commodo quis imperdiet massa. Netus et malesuada fames ac turpis egestas sed tempus. Quis varius quam quisque id diam vel quam elementum. Viverra tellus in hac habitasse. Id aliquet lectus proin nibh nisl condimentum id venenatis. Nunc consequat interdum varius sit.",
      stats: {
        subscribers: 3200000,
        demographics: {
          18: 15,
          25: 30,
          35: 28,
          45: 9,
          55: 18,
        },
      },
    },
  };
  console.log(project, "project");

  if (project == undefined) {
    return <Layout>Dieses Projekt ist uns leider unbekannt</Layout>;
  } else {
    return (
      <Layout>
        <Product project={project} />
        <Deliverables project={project} />
        <Statistics influencer={project.influencer} />
      </Layout>
    );
  }
}

Home.getInitialProps = async ({ query }) => {
  const { id } = query;
  return { id };
};
