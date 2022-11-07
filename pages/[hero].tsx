import type { GetStaticPaths, GetStaticProps } from 'next';

import { axiosClient } from '@/helpers/axiosClient';
import type { HeroPageType } from '@/types/heroPage.types';

export const HeroPage: HeroPageType = ({ heroPageProps }) => (
  <div>
    HeroPage - <pre>{JSON.stringify(heroPageProps, null, 2)}</pre>
  </div>
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

  return {
    props: { hero },
  };
};
