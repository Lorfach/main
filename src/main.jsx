import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
// import App from './App.jsx';
import Wrapper from './Components/Wrapper.jsx';
import Lesson_page from './Components/Lesson_page.jsx';
import Homework_page from './Components/Homework_page/Homework_page.jsx';
import { MyProvider } from './MyContext.jsx';
import Login from './Components/Login/Login.jsx';
// import ProtectedRoute from './Components/ProtectedRoute.jsx';
import Header from './Components/Header/Header.jsx';
import './App.css'
import Courses from './Components/Courses/Courses.jsx';
// createHashRouter
const router = createBrowserRouter([
  { 
    path: "/login", 
    element: <Login /> 
  },
  { 
    path: "/", 
    element: <MyProvider>
      <Header/>
      <Courses /> 
    </MyProvider>
  },
  { 
    path: "/:subject_", 
    element: (
      // <ProtectedRoute>
        <MyProvider>
          <Header/>
          <Wrapper />
        </MyProvider>
      // </ProtectedRoute>
    ),
  },
  { 
    path: "/:subject_/:lessonId", 
    element: (
      // <ProtectedRoute>
        <MyProvider>
          <Header/>
          <Lesson_page />
        </MyProvider>
      // {/* </ProtectedRoute> */}
    ),
  },
  { 
    path: ":subject_/:lessonId/:homeworkId", 
    element: (
      // <ProtectedRoute>
        <>
          <MyProvider>
            <Header/>
            <Homework_page />
          </MyProvider>
        </>
      // {/* </ProtectedRoute> */}
    ),
  },
], {
  future: {
    v7_relativeSplatPath:true, 
    v7_fetcherPersist:true,
    v7_normalizeFormMethod:true,
    v7_partialHydration:true,
    v7_skipActionErrorRevalidation:true
  }
});

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <RouterProvider router={router} future={{ v7_startTransition: true}} />
);
