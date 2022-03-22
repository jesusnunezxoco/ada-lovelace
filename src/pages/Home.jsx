import React from "react";
import Header from "../components/header";
import Hero from "../components/Hero";
import headerImg from "../assets/header.png";
import wedoImg1 from "../assets/wedo1.png";
import wedoImg2 from "../assets/wedo2.png"
import wedoImg3 from "../assets/wedo3.png"
import SectionTitle from "../components/SectionTitle";
import data from "../data.js";
import Impact from "../components/Impact";
import Button from "../components/Button";
function Home() {
  return (
    <>
      <Header>
        <Hero img={headerImg} pageTitle="Technology For An Inclusive World" />
      </Header>
      <main id="main">
        {/* OUR MISSION */}
        <section className="py-16">
          <div className="container mx-auto px-5">
            <SectionTitle title={"Our Mission"} />
            <p className="text-center mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              metus augue. Mauris facilisis eu dui accumsan pretium. Maecenas
              convallis augue ac ornare tincidunt. Nulla nibh nisl, aliquam vel
              magna id, fringilla efficitur enim. Quisque luctus vehicula odio
              vel eleifend. Proin elementum sit amet turpis vitae blandit.
            </p>
          </div>
        </section>
        {/* *IMPACT* */}
        <section className="py-16">
          <div className="container mx-auto px-5 ">
            <SectionTitle title={"Impact"} />
            <div className="xl:grid xl:grid-cols-3 xl:items-center xl:gap-2 md:grid md:grid-cols-1 ">
              {data.impactCards.map((impact) => (
                <Impact
                  title={impact.title}
                  img={impact.img}
                  content={impact.content}
                />
              ))}
            </div>
          </div>
        </section>
        {/* WHAT WE DO */}
        <section>
          <SectionTitle title={"What We Do"} />

          {/* what we do 1*/}
          <article className="flex flex-col-reverse xl:flex-row">
            {/* content column*/}
            <div className="bg-lightest-purple px-12 py-16 w-full xl:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl mb-6 capitalize">Literacy Programs</h3>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                metus augue. Mauris facilisis eu dui accumsan pretium. Maecenas
                convallis augue ac ornare tincidunt. Nulla nibh nisl, aliquam
                vel magna id, fringilla efficitur enim. Quisque luctus vehicula
                odio vel eleifend. Proin elementum sit amet turpis vitae
                blandit.
              </p>
              <Button
                content="Explore Literary Resources"
                bgColor={"dark-purple"}
                textColor={"white"}
              />
            </div>
            {/* image column*/}
            <div className="flex items-center justify-center xl:w-1/2">
              <img alt="What we did" src={wedoImg1} className="w-full" />
            </div>
          </article>
      
            {/* what we do 2*/}
            <article className="flex flex-col-reverse xl:flex-row-reverse">
            {/* content column*/}
            <div className="bg-light-green px-12 py-16 w-full xl:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl mb-6 capitalize">For Care Professionals</h3>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                metus augue. Mauris facilisis eu dui accumsan pretium. Maecenas
                convallis augue ac ornare tincidunt. Nulla nibh nisl, aliquam
                vel magna id, fringilla efficitur enim. Quisque luctus vehicula
                odio vel eleifend. Proin elementum sit amet turpis vitae
                blandit.
              </p>
              <Button
                content="Find Educator Resources"
                bgColor={"normal-green"}
                textColor={"white"}
              />
            </div>
            {/* image column*/}
            <div className="flex flex-reverse items-center justify-center xl:w-1/2">
              <img alt="What we did" src={wedoImg2} className="w-full" />
            </div>
          </article>
              {/* what we do 3*/}
              <article className="flex flex-col-reverse xl:flex-row">
            {/* content column*/}
            <div className="bg-light-yellow px-12 py-16 w-full xl:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl mb-6 capitalize">For Care Professionals</h3>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                metus augue. Mauris facilisis eu dui accumsan pretium. Maecenas
                convallis augue ac ornare tincidunt. Nulla nibh nisl, aliquam
                vel magna id, fringilla efficitur enim. Quisque luctus vehicula
                odio vel eleifend. Proin elementum sit amet turpis vitae
                blandit.
              </p>
              <Button
                content="Learn About Health Services"
                bgColor={"dark-yellow"}
                textColor={"white"}
              />
            </div>
            {/* image column*/}
            <div className="flex items-center justify-center xl:w-1/2">
              <img alt="What we did" src={wedoImg3} className="w-full" />
            </div>
          </article>
      
        </section>
        {/* LATEST BLOGS */}
      </main>
    </>
  );
}

export default Home;
