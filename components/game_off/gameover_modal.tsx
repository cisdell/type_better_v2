import Image from "next/image";

// import imagePath from "@/lib/JRE.jpg";
export default function GameOverModal() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl">
      <Image
        src="/images/gameover.png"
        width={600}
        height={600}
        alt="Game Over"
      />
      <button
        className="h-8 w-20 bg-blue-500 text-white rounded-lg"
        onClick={() => {
          console.log("Game Over!");
        }}
      >
        Close
      </button>
    </div>
  );
}

// /Users/andrewicho/Desktop/projects/typing_game2/type_better_v2/lib/gameover.png
