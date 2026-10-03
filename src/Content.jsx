import ServicePage from "./ServicePage";

function Content() {
  return (
    <ServicePage
      number="05"
      title="Content"
      titleAccent="Creation."
      description="Content built around ideas, stories and visuals that give your brand something worth paying attention to."
      intro={
        <>
          Create things
          <br />
          people want to see.
        </>
      }
      services={[
        "Content Strategy",
        "Photo & Video",
        "Creative Copy",
        "Campaign Content",
      ]}
    />
  );
}

export default Content;