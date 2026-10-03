import ServicePage from "./ServicePage";

function WebDesign() {
  return (
    <ServicePage
      number="06"
      title="Web &"
      titleAccent="UI/UX."
      description="Digital experiences designed to look beautiful, feel intuitive and move people toward action."
      intro={
        <>
          Design digital
          <br />
          experiences that move.
        </>
      }
      services={[
        "Website Design",
        "UI/UX Design",
        "Responsive Experiences",
        "Digital Prototyping",
      ]}
    />
  );
}

export default WebDesign;