import { useRouter } from "next/router";
const NewDetails = () => {
  const router = useRouter();
  //   console.log(router); // Object
  //   console.log(router.query); // {newsId:.....}
  //   console.log(router.query.newsId); //.....
  return (
    <>
      <h3>New details</h3>
      <p>
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
      </p>
    </>
  );
};
export default NewDetails;
