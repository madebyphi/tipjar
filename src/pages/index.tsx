import type { NextPage } from "next";
import Head from "next/head";
import { ConnectKitButton } from "connectkit";

function MainBlock() {
  return (
    <main className="min-h-[100vh] py-[0.6875rem] px-[1.25rem] flex flex-1 flex-col items-center">
      <ConnectBlock />
      <TitleBlock />
    </main>
  );
}

function ConnectBlock() {
  return (
    <div className="flex flex-col justify-center items-end w-full">
      <ConnectKitButton />
    </div>
  );
}

function TitleBlock() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="font-normal text-[2.5rem] my-0">TipJar</h1>
      <p className="text-[1.25rem]">Toss a coin to the witcher ✨</p>
    </div>
  );
}

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TipJar</title>
        <meta name="description" content="Tipping app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainBlock />
    </div>
  );
};

export default Home;
