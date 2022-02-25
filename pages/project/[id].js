import Layout from "../components/Layout";
import Deliverables from "../components/pageComponents/deliverables";
import Product from "../components/pageComponents/product";
import Statistics from "../components/pageComponents/statistics";
import projects from "../mockups/projects.json";

export default function Home({ id }) {
  const project = projects.filter((project) => project.id == id)[0];
  return (
    <Layout>
      <Product project={project} />
      <Deliverables project={project} />
      <Statistics influencer={project.influencer} />
    </Layout>
  );
}

Home.getInitialProps = async ({ query }) => {
  const { id } = query;
  return { id };
};
