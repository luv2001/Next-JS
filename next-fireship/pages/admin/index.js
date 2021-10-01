import Loader from "../../components/Loader";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Successfully Created");
export default function AdminPostPage() {
  return (
    <main>
      <h1>Admin ka pages</h1>
      <button onClick={notify}>Make me a toast</button>
      {/* <Loader show={1} /> */}
    </main>
  );
}
