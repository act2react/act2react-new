import ServicePage from "./ServicePage";

function CreativeDirection() {
  return (
    <ServicePage
      number="02"
      title="Creative"
      titleAccent="Direction."
      description="Creative direction that turns strategy into a distinctive visual world people can recognize and remember."
      intro={
        <>
          Turn ideas
          <br />
          into something people feel.
        </>
      }
      services={[
        "Creative Direction",
        "Art Direction",
        "Campaign Concepts",
        "Visual Storytelling",
      ]}
    />
  );
}

export default CreativeDirection;