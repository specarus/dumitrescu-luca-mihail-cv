import Layout from "./layout";
import Left from "./components/left/Left";
import Right from "./components/right/Right";

function App() {
  return (
    <Layout>
      <div className="w-full h-auto grid mobile:grid-cols-9">
        <div className="mobile:col-span-3 h-full text-white bg-primary mobile:pb-2 tablet:pb-4">
          <div className="mt-[9.7rem] tablet:mt-[13.5rem] laptop:mt-[17rem]">
            <Left />
          </div>
        </div>
        <div className="mobile:col-span-6 h-full text-gray-700 bg-white mobile:pb-2 tablet:pb-4">
          <div className="mobile:mt-[9.7rem] tablet:mt-[13.5rem] laptop:mt-[17rem]">
            <Right />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
