// websiteName.com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
const NewMeetupPage = () => {
  const onAddMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };
  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
};
export default NewMeetupPage;
