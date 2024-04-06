import SectionHeaders from "./SectionHeaders";

const AboutSection = () => {
  return (
    <>
      <section className="text-center pt-6">
        <SectionHeaders subHeader="Our Story" mainHeader="About Us" />

        <div className="mx-20 text-gray-500">
          <p className="pt-4 mx-20">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            veritatis accusamus quod id, dolor eum quam voluptatem doloribus
            sunt,
          </p>
          <p className="pt-4 mx-20">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            veritatis accusamus quod id, dolor eum quam voluptatem doloribus
            sunt,
          </p>
          <p className="pt-4 mx-20">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            veritatis accusamus quod id, dolor eum quam voluptatem doloribus
            sunt,
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
