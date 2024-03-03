import { Link } from "react-router-dom";
import { departments } from "../../utils/dataDepartmentsBolimMalaxat"; // Ensure correct import path

export default function DepartmentsBolimMalaxat() {
  return (
    <div className="pt-[120px] px-[60px] bg-[#202124]">
      <div>
        <h1 className="text-[#fff] text-[30px]">Bo`limlar</h1>
      </div>
      <div className="cursor-pointer flex gap-[80px] flex-wrap mt-[20px]">
        {departments?.map((department) => (
          <Link
            id="shadow"
            key={department.id}
            to={department?.link}
            className="list-none w-[200px] h-[100%] border-2 border-[green] rounded-[5px] p-[25px]"
          >
            <div className="flex justify-center">
              <img
                className="w-[100px] h-[100px]"
                src={department?.image}
                alt={department?.name}
              />
            </div>
            <p className="text-[#fff] text-center mt-[7px]">
              {department?.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
