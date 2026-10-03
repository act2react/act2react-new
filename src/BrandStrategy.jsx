import ServicePage from "./ServicePage";

function BrandStrategy() {
  return (
    <ServicePage
      number="01"
      title="Brand"
      titleAccent="Strategy."
      description="Strategic thinking that gives your brand a clear position, purpose and direction."
      intro={
        <>
          Build a brand
          <br />
          with a reason to matter.
        </>
      }
      services={[
        "Brand Positioning",
        "Audience Strategy",
        "Brand Architecture",
        "Brand Voice",
      ]}
    />
  );
}

export default BrandStrategy;