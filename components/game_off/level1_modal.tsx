import Image from "next/image";

export default function LevelOneModal({
  setModalOn,
  setPaused,
  setCountdownOn,
}: any) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setModalOn(false);
    setPaused(false);
    setCountdownOn(true);
  };
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 text-white ml-[20%] mr-[20%] mt-[5%] mb-[5%] rounded-3xl z-20">
      <h2>
        Level 1 Cleared! <br />
        Advancing to level 2. Words will come down every .8 seconds!!
      </h2>
      <Image
        src="/images/keyboard.png"
        width={600}
        height={600}
        alt="Level1 clear"
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
