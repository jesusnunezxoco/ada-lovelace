import React from "react";
import Button from "../../components/Button"
import SectionTitle from "../../components/SectionTitle";
import wedoImg1 from "../../assets/wedo1.png";
import wedoImg2 from "../../assets/wedo2.png";
import wedoImg3 from "../../assets/wedo3.png";
function WeDoSection() {
  return (
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
            convallis augue ac ornare tincidunt. Nulla nibh nisl, aliquam vel
            magna id, fringilla efficitur enim. Quisque luctus vehicula odio vel
            eleifend. Proin elementum sit amet turpis vitae blandit.
          </p>
          <Button
            content="Explore Literary Resources"
            classes="bg-dark-purple text-white"
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
            convallis augue ac ornare tincidunt. Nulla nibh nisl, aliquam vel
            magna id, fringilla efficitur enim. Quisque luctus vehicula odio vel
            eleifend. Proin elementum sit amet turpis vitae blandit.
          </p>
          <Button
            content="Find Educator Resources"
            classes={"bg-normal-green text-white"}
  
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
            convallis augue ac ornare tincidunt. Nulla nibh nisl, aliquam vel
            magna id, fringilla efficitur enim. Quisque luctus vehicula odio vel
            eleifend. Proin elementum sit amet turpis vitae blandit.
          </p>
          <Button
            content="Learn About Health Services"
            classes={"bg-dark-yellow text-black"}
          />
        </div>
        {/* image column*/}
        <div className="flex items-center justify-center xl:w-1/2">
          <img alt="What we did" src={wedoImg3} className="w-full" />
        </div>
      </article>
    </section>
  );
}

export default WeDoSection;
