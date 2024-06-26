import Image from "next/image";

export default function LevelThreeModal({
  setModalOn,
  setPaused,
  setDemoOn,
}: any) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setModalOn(false);
    setPaused(true);
    setDemoOn(true);
  };

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 text-white ml-[20%] mr-[20%] mt-[5%] mb-[5%] rounded-3xl z-20">
      <h2>
        Level 3 Cleared! <br />
        You are typing GOD. I have nothing else left for you.
      </h2>
      <Image
        src="/images/kevinhart.jpg"
        width={600}
        height={600}
        alt="Level3 clear"
      />
      <form onSubmit={handleSubmit}>
        <button
          className="h-8 w-20 bg-blue-500 text-white rounded-lg"
          type="submit"
          autoFocus
        >
          Close
        </button>
      </form>
    </div>
  );
}
