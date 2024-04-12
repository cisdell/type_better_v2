import Image from "next/image";
type ModalType = {
  setModalOn: Function;
};

// import imagePath from "@/lib/JRE.jpg";
export default function GameOverModal({ setModalOn }: ModalType) {
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
          setModalOn(false);
        }}
      >
        Close
      </button>
    </div>
  );
}

// /Users/andrewicho/Desktop/projects/typing_game2/type_better_v2/lib/gameover.png
