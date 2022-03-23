import React from "react";
import Button from "../../components/Button";
function EmailCtaSection() {
  return (
    <section className="bg-light-yellow py-24 px-5  text-center">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-bold mb-5">
          Get Research Based Articles and More!
        </h2>

        <p className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus
          augue. Mauris facilisis eu dui accumsan pretium. Maecenas convallis
          augue ac ornare tincidunt.
        </p>
        <form className="w-fit mx-auto flex flex-col  justify-between lg:flex-row lg:items-center">
          <div className="flex flex-col items-start mr-3 ">
            <label for="firstname" className="font-bold text-md ">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="Enter Your Name"
              className="p-2 pr-16 mb-3 border-black border-2 rounded"
            />
          </div>
          <div className="flex flex-col items-start mr-3">
            <label for="email" className="font-bold text-md">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="p-2 pr-16 mb-3 border-black border-2 rounded"
            />
          </div>
          <div>
            <Button
              content="Subscribe"
              type="submit"
              classes={"bg-dark-yellow text-black"}
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default EmailCtaSection;
