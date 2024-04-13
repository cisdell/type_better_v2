import Image from "next/image";

export default function LevelThreeModal({ endGame }: { endGame: Function }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 text-white ml-[20%] mr-[20%] mt-[5%] mb-[5%] rounded-3xl z-20">
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
        className="h-8 w-20 bg-blue-500 text-white rounded-lg"
        onClick={() => {
          endGame();
        }}
      >
        Close
      </button>
    </div>
  );
}
