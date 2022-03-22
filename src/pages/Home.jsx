import React from 'react'
import Header from '../components/header'
import Hero from "../components/Hero"
import headerImg from "../assets/header.png"
import impactImg from "../assets/impact1.png";
import SectionTitle from '../components/SectionTitle'
function Home() {
  return (
    <>
      <Header>
        <Hero img={headerImg} pageTitle="Technology For An Inclusive World" />
      </Header>
      <main id="main">
        <section className="py-24">
          <div className="container mx-auto">
            <SectionTitle title={"Our Mission"} />
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              metus augue. Mauris facilisis eu dui accumsan pretium. Maecenas
              convallis augue ac ornare tincidunt. Nulla nibh nisl, aliquam vel
              magna id, fringilla efficitur enim. Quisque luctus vehicula odio
              vel eleifend. Proin elementum sit amet turpis vitae blandit.
            </p>
          </div>
        </section>
        {/* *IMPACT* */}
        <section className="py-24">
          <div className="container mx-auto">
            <SectionTitle title={"Impact"} />
            <div className="grid grid-cols-3 gap-2">
           
            </div>
           
          </div>
        </section>
      </main></>
  )
}

export default Home