import React from 'react'
import data from "../../data.js";
import SectionTitle from "../../components/SectionTitle";
import Impact from "../../components/Impact"
function ImpactSection() {
  return (
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
  )
}

export default ImpactSection