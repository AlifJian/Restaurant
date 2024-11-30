import { MdOutlineThumbUp, MdOutlineThumbDown } from "react-icons/md";

function Comment({ nama, imgSrc, deskripsi }) {
  return (
    <>
      <div className="flex gap-x-4 mb-6 p-4">
        <img src={imgSrc} alt={nama} className="size-16 rounded-full" />
        <div className="flex-col flex w-full">
          <div className="border border-slate-200 p-2 rounded-md">
            <p className="text-sm font-semibold">{nama}</p>
            <p className="text-sm">
              {deskripsi}
            </p>
          </div>
          <div className="flex gap-x-4 mt-4">
            <MdOutlineThumbDown className="text-lg" />
            <MdOutlineThumbUp className="text-lg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;
