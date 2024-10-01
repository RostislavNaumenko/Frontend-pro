import ReactDOM from "react-dom/client";
import "./index.css";
import Lesson_10 from "./lessons/lesson_10/Lesson10";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./components/homepage/HomePage";
import FetchDog from "./components/fetchDog/FetchDog";
import MyForm from "./components/myForm/MyForm";
import Feedback from "./components/feedback/Feedback";
import RobotForm from "./components/robotForm/RobotForm";
import Lesson01 from "./lessons/lesson_01/Lesson01";
import Lesson02 from "./lessons/lesson_02/Lesson02";
import Lesson03 from "./lessons/lesson_03/Lesson03";
import Lesson04 from "./lessons/lesson_04/Lesson04";
import Lesson05 from "./lessons/lesson_05/Lesson05";
import Lesson06 from "./lessons/lesson_06/Lesson06";
import Lesson07 from "./lessons/lesson_07/Lesson07";
import Lesson10 from "./lessons/lesson_10/Lesson10";
import NoPage from "./components/noPage/NoPage";
import Shop from "./components/myShop/Shop";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} /> {/* Главная страница */}
        <Route element={<FetchDog />} path="fetch-dog" />
        <Route element={<MyForm />} path="my-form" />
        <Route element={<Feedback />} path="feedback" />
        <Route element={<RobotForm />} path="robot-form" />
        <Route element={<Shop />} path="shop" />
        <Route element={<Lesson01 />} path="lesson-1" />
        <Route element={<Lesson02 />} path="lesson-2" />
        <Route element={<Lesson03 />} path="lesson-3" />
        <Route element={<Lesson04 />} path="lesson-4" />
        <Route element={<Lesson05 />} path="lesson-5" />
        <Route element={<Lesson06 />} path="lesson-6" />
        <Route element={<Lesson07 />} path="lesson-7" />
        <Route element={<Lesson10 />} path="lesson-10" />
        <Route element={<NoPage />} path="*" />
      </Route>
    </Routes>
  </HashRouter>
);
