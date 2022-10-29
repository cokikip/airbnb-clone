import type { NextPage } from "next";
import Head from "next/head";
import { Banner, Header, MediumCard, SmallCard } from "../components";

interface Home {
  exploreData: any;
  cardData: any;
}

const Home: NextPage<Home> = ({ exploreData, cardData }) => {
  return (
    <div className="">
      <Head>
        <title>Home - Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* Fetch data from the api */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item: any, index: any) => (
              <SmallCard
                key={index}
                img={item?.img}
                distance={item?.distance}
                location={item?.location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData?.map(({ img, title }: any, index: any) => (
              <MediumCard key={index} img={img} title={title} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const exploreData = await fetch(
    "https://api.npoint.io/9c4575f3beb3d9820e85"
  ).then((res) => res.json());

  const cardData = await fetch(
    "https://api.npoint.io/8842401c2bdb9c071db8"
  ).then((res) => res.json());

  console.log(exploreData);

  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
