import Image from "next/image";

export default function LevelOneModal({ setModalOn, setPaused }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-yellow-200 ml-[20%] mr-[20%] mt-[5%] mb-[5%]">
      <h2>
        Level 1 Cleared! <br />
        Advancing to level 2. Words will come down every .8 seconds!!
      </h2>
      <Image
        src="/images/Keyboard.png"
        width={600}
        height={600}
        alt="Level1 clear"
      />
      <button
        onClick={() => {
          setModalOn(false);
          setPaused(false);
        }}
      >
        Close
      </button>
    </div>
  );
}
