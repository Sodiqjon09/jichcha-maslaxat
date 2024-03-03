import { dataAlMaxtunThemeSections } from "../../../utils/dataAlMaxtum";

export default function AlMaxtumPageMain() {
  return (
    <div
      id="sections"
      // className="pt-[100px] px-[60px] h-full overflow-y-scroll scroll-snap-type-y-mandatory"
    >
      {dataAlMaxtunThemeSections?.map((el) => {
        return (
          <div
            key={el.id}
            id="sildes"
            // className="w-[500px] bg-[blue] h-screen flex justify-center items-center snap-start"
          >
            <h2 className="text-[#fff]">{el.dataNameText}</h2>
          </div>
        );
      })}
    </div>
  );
}

/* <div className="pt-[120px] px-[60px]">
<div className="flex bg-[#fff] w-[300px] h-[300px] mt-[50px] overflow-x-auto whitespace-nowrap">
  <h1>h1</h1>
</div>
<div className="flex bg-[#fff] w-[300px] h-[300px] mt-[50px] overflow-x-auto whitespace-nowrap">
  <h1>h2</h1>
</div>
</div> */
