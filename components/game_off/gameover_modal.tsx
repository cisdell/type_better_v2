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
      <button
        className="h-auto w-auto bg-blue-500 text-white rounded-lg"
        onClick={() => {
          setModalOn(false);
          setPaused(false);
          setCountdownOn(true);
          setGameOver(false);
        }}
      >
        Take me to Level 1
      </button>

      <button
        className="h-auto w-auto bg-blue-500 text-white rounded-lg"
        onClick={() => {
          setDemoOn(true);
        }}
      >
        Quit
      </button>
    </div>
  );
}

// /Users/andrewicho/Desktop/projects/typing_game2/type_better_v2/lib/gameover.png
