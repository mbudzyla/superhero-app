import Layout from '@organisms/Layout';
import type { HomePageProps } from '@templates/HomePageTemplate';
import HomePageTemplate from '@templates/HomePageTemplate';
import type { NextPage } from 'next';
import type { GetStaticProps } from 'next';

import { axiosClient } from '@/helpers/axiosClient';
import { mapHeroCard } from '@/helpers/mappers/heroCard';
const Home: NextPage<HomePageProps> = props => (
  <Layout>
    <HomePageTemplate {...props} />
  </Layout>
);

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axiosClient.get(`/get_randoms`);

  const randomHeroes = data.map(mapHeroCard);

  return {
    props: { randomHeroes },
  };
};
