// websiteName.com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";
const NewMeetupPage = () => {
  const router = useRouter();
  const onAddMeetupHandler = async (enteredMeetupData) => {
    // local direction (path)
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
    </>
  );
};
export default NewMeetupPage;
