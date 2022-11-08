import Layout from '@organisms/Layout';
import HeroPageTemplate from '@templates/HeroPageTempate';
import type { GetStaticPaths, GetStaticProps } from 'next';

import { axiosClient } from '@/helpers/axiosClient';
import { mapHeroAttributes } from '@/helpers/mappers/heroDescription';
import { mapHeroHeader } from '@/helpers/mappers/heroHeader';
import type { HeroPageType } from '@/types/heroPage.types';

export const HeroPage: HeroPageType = props => (
  <Layout>
    <HeroPageTemplate {...props} />
  </Layout>
);
export default HeroPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axiosClient.get('/slugs');

  return {
    paths: data.map((hero: string) => ({ params: { hero } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const {
    data: [hero],
  } = await axiosClient.get(`/heroes?slug=${params?.hero}`);

  const heroHeader = mapHeroHeader(hero);
  const heroAttributes = mapHeroAttributes(hero);

  return {
    props: { heroHeader, heroAttributes },
  };
};
