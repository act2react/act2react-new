import ServicePage from "./ServicePage";

function Branding() {
  return (
    <ServicePage
      number="02"
      title="Branding &"
      titleAccent="Identity."
      description="Distinctive visual identities designed to make brands recognizable, memorable and consistent."
      intro={
        <>
          Give your brand
          <br />
          something to be remembered by.
        </>
      }
      services={[
        "Brand Identity",
        "Logo Design",
        "Visual Systems",
        "Brand Guidelines",
      ]}
    />
  );
}

export default Branding;