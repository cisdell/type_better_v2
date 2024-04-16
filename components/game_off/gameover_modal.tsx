import Image from "next/image";

// import imagePath from "@/lib/JRE.jpg";
export default function GameOverModal({
  setCountdownOn,
  setDemoOn,
  setModalOn,
  setPaused,
  setGameOver,
}: any) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl z-10">
      <Image
        src="/images/gameover.png"
        width={600}
        height={600}
        alt="Game Over"
      />
      <div className="flex space-x-4 text-2xl">
        <button
          className="w-[10rem] h=[2rem] bg-yellow-600 text-black rounded-lg"
          autoFocus
          onClick={() => {
            setModalOn(false);
            setPaused(false);
            setCountdownOn(true);
            setGameOver(false);
          }}
        >
          Level 1
        </button>

        <button
          className="w-[10rem] h=[2rem] bg-yellow-600 text-black rounded-lg"
          onClick={() => {
            setDemoOn(true);
            setGameOver(false);
          }}
        >
          Quit
        </button>
      </div>
    </div>
  );
}

// /Users/andrewicho/Desktop/projects/typing_game2/type_better_v2/lib/gameover.png
