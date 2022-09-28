import NewMeetupForm from "../components/meetups/NewMeetupForm";
function NewMeetupPage() {
  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://react-http-f4f9d-default-rtdb.firebaseio.com/react-meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {});
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm addMeetupHandler={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
