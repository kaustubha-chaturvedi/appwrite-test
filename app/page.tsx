import Navbar from './component/Navbar';
import Blogs from './component/Blogs';
export const metadata={
  title:'Appwrite Cloud Test'
}

// const client = new Client();
// client
// .setEndpoint('https://cloud.appwrite.io/v1')
// .setProject('648dedd51748d651d1ae');

// const databases = new Databases(client);

// // const promise = databases.createDocument(
// //   '648df03255fe64615051',
// //   '648df03b4b66dffd3a7d',
// //   ID.unique(),
// //   {title: 'My First Post', content: 'Hello World!'}
// // );

// // promise.then(function (response) {
// //   console.log(response); // Success
// // }, function (error) {
// //   console.log(error); // Failure
// // });

export default function Home() {
  return (
    <>
      <Navbar/>
      <Blogs />
    </>
  )
}
