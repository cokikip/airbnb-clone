import type { NextPage } from "next";
import Head from "next/head";
import {
  Banner,
  Footer,
  Header,
  LargeCard,
  MediumCard,
  SmallCard,
} from "../components";

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
        <section>
          <LargeCard
            key="1"
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlist curated by Airbnb."
            buttonText="Get Inspired"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const exploreData = await fetch(
    "https://api.npoint.io/4c523b3e88e26658b9fb"
  ).then((res) => res.json());

  const cardData = await fetch(
    "https://api.npoint.io/3258fd3f7a33f0aab25a"
  ).then((res) => res.json());

  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
