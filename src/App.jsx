import TaskList from "./components/TaskList.jsx";
import AddTask from "./components/AddTask.jsx";
import '@fontsource/roboto/300.css';
function App() {

  return (
    <div className="bg-sky-900 rounded-xl m-10 place-content-center font-roboto">
      <AddTask className="place-content-center "/>
      <TaskList/>
    </div>
  );
}
export default App;
