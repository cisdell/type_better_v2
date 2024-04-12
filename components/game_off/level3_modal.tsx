import Image from "next/image";

export default function LevelThreeModal({
  setModalOn,
  setPaused,
  setGameOver,
}) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-yellow-200 ml-[20%] mr-[20%] mt-[5%] mb-[5%]">
      <h2>
        Level 3 Cleared! <br />
        You are typing GOD. I have nothing else left for you.
      </h2>
      <Image
        src="/images/JRE.jpg"
        width={600}
        height={600}
        alt="Level3 clear"
      />
      <button
        onClick={() => {
          setModalOn(false);
          setPaused(true);
          setGameOver(true);
        }}
      >
        Close
      </button>
    </div>
  );
}