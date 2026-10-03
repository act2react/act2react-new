import ServicePage from "./ServicePage";

function SocialMedia() {
  return (
    <ServicePage
      number="03"
      title="Social"
      titleAccent="Media."
      description="Social content designed to capture attention, build communities and keep your brand part of the conversation."
      intro={
        <>
          Make your brand
          <br />
          impossible to scroll past.
        </>
      }
      services={[
        "Social Strategy",
        "Content Creation",
        "Social Campaigns",
        "Community Growth",
      ]}
    />
  );
}

export default SocialMedia;