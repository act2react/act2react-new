import ServicePage from "./ServicePage";

function DigitalMarketing() {
  return (
    <ServicePage
      number="04"
      title="Digital"
      titleAccent="Marketing."
      description="Digital marketing strategies designed to build awareness, reach the right audience and support meaningful growth."
      intro={
        <>
          Turn digital attention
          <br />
          into meaningful action.
        </>
      }
      services={[
        "Digital Strategy",
        "Performance Marketing",
        "Campaigns",
        "Audience Growth",
      ]}
    />
  );
}

export default DigitalMarketing;