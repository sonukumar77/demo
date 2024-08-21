import { useEffect, useState } from "react";
import { GOOGLE_DRIVE_BASE_URL } from "./constants/common.js";
import useFetch from "./hooks/useFetch.js";
import Form from "./components/Form.jsx";

const INITIAL_DATA = {
  taskTitle: "",
  taskDescription: "",
  type: "Won't haves",
};

function App() {
  const { data } = useFetch(GOOGLE_DRIVE_BASE_URL);
  const [inputData, setInputData] = useState(INITIAL_DATA);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setInputData((prev) => ({ ...prev, [name]: value }));
    // console.log("name==>", name, value);
  };

  const handleSubmit = () => {};

  const filterData = (d, key) => {
    const filterData = d?.filter((element) => {
      if (element.title === key) {
        return element;
      }
    });

    return filterData;
  };

  const handlerAddData = (inpData, data) => {
    const key = inputData.type;

    // const output;
  };

  handlerAddData(inputData, data);

  const result = filterData(data, "Won't haves");
  const result2 = filterData(data, "Could haves");
  const result3 = filterData(data, "Must haves");
  console.log("Result", data);

  return (
    <main className="flex flex-col items-center gap-8 py-16 max-w-[1280px] mx-auto">
      <h1 className="text-4xl font-bold">Hello React & Tailwind!</h1>

      <table>
        <thead>
          <tr>
            <th>Won't haves</th>
            <th>Could haves</th>
            <th>Must haves</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-2 border-blue-500">
            <td className="w-96 border-2 border-red-500 flex flex-col">
              <table>
                <tr>
                  {result[0]?.tasks.length > 0
                    ? result[0]?.tasks?.map((element, index) => (
                        <td>{element.title}</td>
                      ))
                    : null}
                </tr>
              </table>
            </td>

            <td className="w-96 border-2 border-gray-500">
              <table>
                <tr>
                  {result2[0]?.tasks.length > 0
                    ? result[0]?.tasks?.map((element, index) => (
                        <td>{element.title}</td>
                      ))
                    : null}
                </tr>
              </table>
            </td>

            <td className="w-96 border-2 border-yellow-500">
              <table>
                <tr>
                  {result3[0]?.tasks.length > 0
                    ? result[0]?.tasks?.map((element, index) => (
                        <td>{element.title}</td>
                      ))
                    : null}
                </tr>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      <Form
        handleInput={handleInput}
        inputData={inputData}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}

export default App;
