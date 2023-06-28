import ImgHeader from "../../assets/images/headerImage/Godfather_Header.jpg";
import Logo from "../../assets/logo/the-godfather.svg";
import { EmployeeData } from "../../assets/data";
import { useMemo, useRef, useState } from "react";

interface IEmployee {
  popularity: number;
  name: string;
  image: string;
  biography: string;
  colleagues: string[];
}

const Home = () => {
  const EmployeeDefault = useMemo(() => {
    return EmployeeData["employees"];
  }, []);

  const prevData = useRef(EmployeeDefault);
  const [employees, setEmployees] = useState<IEmployee[]>([...EmployeeDefault]);
  const [employeeActive, setEmployeeActive] = useState(employees[0]);
  const [colleagues, setColleagues] = useState<string[]>(
    employeeActive.colleagues
  );

  const onChangeBiography = (event: React.ChangeEvent<HTMLInputElement>) => {
    const employeeCurrent = employees?.map((employee) => {
      if (employee.name?.includes(employeeActive.name)) {
        Object.assign(employee, {
          popularity: event.target.value,
        });
      }
      return employee;
    });
    setEmployees(employeeCurrent);
    setEmployeeActive({
      ...employeeActive,
      popularity: Number(event.target.value),
    });
  };

  const findColleague = (employee: IEmployee) => {
    const colleague = colleagues.find((colleague) =>
      colleague.includes(employee?.name)
    );
    return colleague;
  };

  const activeEmployee = (employee: IEmployee) => {
    setEmployees(prevData.current);
    setEmployeeActive(employee);
    setColleagues(employee.colleagues);
  };

  const SideBarComponent = () => {
    return (
      <div className="md:w-60 lg:w-80  bg-[#1d1f28b0] h-screen absolute left-0 top-0 z-20">
        <div className="h-80 relative">
          <a href="/" className="absolute inset-0 h-fit m-auto">
            <img className="w-36 flex mx-auto" src={Logo} alt="the godfather" />
          </a>
        </div>
        <div>
          <ul>
            {employees.map((employee, index) => {
              return (
                <li
                  key={`employees-${index}`}
                  className="hover:bg-slate-700 cursor-pointer"
                  onClick={() => {
                    activeEmployee(employee);
                  }}
                >
                  <div
                    className="px-10 text-[#21d0ee]  whitespace-nowrap text-center truncate"
                    style={{
                      color: `${
                        findColleague(employee) ||
                        employeeActive.name?.includes(employee.name)
                          ? "#21d0ee"
                          : "#fff"
                      }`,
                      fontSize: `${Math.floor(employee.popularity)}px`,
                    }}
                  >
                    {employee.name}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };

  const HeaderComponent = () => {
    return (
      <div className="relative left-0 top-0">
        <img
          className="md:h-[150px] xl:h-[300px] w-full object-cover object-top"
          src={ImgHeader}
          alt="Godfather Header"
        />
      </div>
    );
  };

  const DetailEmployeeComponent = useMemo(() => {
    return (
      <div className=" h-full bg-sidebar shadow-container pb-16 relative  z-10">
        <div className="md:w-[calc(100%_-_15rem)] lg:w-[calc(100%_-_20rem)] ml-auto px-14 relative ">
          <div className="w-[calc(100%_-_112px)] pl-4 ml-auto text-white absolute -top-10 flex gap-6">
            <img
              src={`images/profilePics/${employeeActive.image}`}
              className="w-28 h-28 border border-[#9d9c9c] shadow-avatar rounded-md "
              alt="Vito_Corleone"
            />
            <div className="flex flex-col gap-4  pb-6  flex-1">
              <h2 className="text-4xl leading-[1.6rem] font-light whitespace-nowrap">
                {employeeActive.name}
              </h2>

              <div className="flex gap-3 items-center pt-6">
                <label for="small-range" className="block text-xl ">
                  Popularity
                </label>
                <input
                  id="small-range"
                  type="range"
                  onChange={(e) => onChangeBiography(e)}
                  value={employeeActive.popularity}
                  className="w-full h-1  bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
                ></input>
              </div>
              <div className="rounded-sm bg-black p-4 pb-4 ">
                <h3 className="mb-2">Biography</h3>
                <p className="overflow-y-auto md:max-h-[200px]">
                  {employeeActive.biography}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="relative h-screen">
      <SideBarComponent />
      <HeaderComponent />
      {DetailEmployeeComponent}
    </div>
  );
};

export default Home;
