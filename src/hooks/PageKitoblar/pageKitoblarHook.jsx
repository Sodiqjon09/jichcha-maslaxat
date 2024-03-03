import { Link } from "react-router-dom";
import { pageKitoblarDataImgText } from "../../utils/pageKitoblarData";

export function HelloBro() {
  console.log("red");
}

export default function pageKitoblarHook() {
  const red = HelloBro();
  return (
    <div className="pt-[120px] px-[60px]">
      <div className="flex">
        {pageKitoblarDataImgText?.map((el) => {
          return (
            <Link key={el.id} to={el.link}>
              <div className="cursor-pointer w-[300px] h-[100%] border px-[20px] p-[10px] rounded-[7px]">
                <img src={el.img} className="w-[260px] h-[290px]" alt="" />
                <p className="text-center text-[#fff] mt-[5px] w-[100%] pb-[15px]">
                  {el.nameText}
                </p>
              </div>
            </Link>
          );
        })}
        <p>{red}</p>
      </div>
    </div>
  );
}
