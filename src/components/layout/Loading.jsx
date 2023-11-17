import Loader from "../../img/loader.gif";

function Loading() {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <img src={Loader} alt="Loader" className="w-14 rounded-full" />
    </div>
  );
}

export default Loading;
