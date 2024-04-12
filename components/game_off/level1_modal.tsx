import Image from "next/image";
type ModalType = {
  setModalOn: Function;
  setPaused: any;
};

export default function LevelOneModal({ setModalOn, setPaused }: ModalType) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 text-white ml-[20%] mr-[20%] mt-[5%] mb-[5%] rounded-3xl">
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
        className="h-8 w-20 bg-blue-500 text-white rounded-lg"
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
