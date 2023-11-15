// // import React from "react";
// // import {
// //   collection,
// //   getFirestore,
// //   query,
// //   where,
// //   onSnapshot,
// //   DocumentData,
// //   Unsubscribe,
// // } from "firebase/firestore";
// // import Link from "next/link";
// // import Task from "@/components/Task";
// // import { app, auth, db } from "@/helpers/firebase";

// // const taskDisplay = () => {
// //   return (
// //     <>
// //       <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 ">
// //         <div className="p-4 bg-white rounded-md shadow md:p-6 dark:bg-gray-900 ">
// //           <h2 className="pb-4 text-xl font-bold border-b dark:border-gray-700 dark:text-gray-400">
// //             Task overview
// //           </h2>
// //           <div className="px-4 py-3 text-xs font-medium">
// //             <div className="flex px-4 mb-3 text-gray-500 dark:text-gray-400">
// //               <h2 className="mr-auto">Task Name</h2>
// //               <h2>Action</h2>
// //             </div>
// //             {/* task list  */}
// //             <div className="flex justify-between p-4 mb-4 bg-gray-100 rounded dark:bg-gray-800">
// //               <div className="flex">
// //                 <span className="inline-flex items-center justify-center w-8 h-8 mr-2 text-blue-600 rounded dark:text-gray-400 dark:bg-gray-700 bg-blue-50">
// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     width="16"
// //                     height="16"
// //                     fill="currentColor"
// //                     className="w-5 h-5 group-"
// //                     viewBox="0 0 16 16"
// //                   >
// //                     <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
// //                     <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"></path>
// //                   </svg>
// //                 </span>
// //                 <div className="text-xs">
// //                   <p className="font-medium dark:text-gray-400">Time</p>
// //                   <p className="text-gray-500 dark:text-gray-400">3 hours</p>
// //                 </div>
// //               </div>
// //               <div className="flex">
// //                 <button className="mr-2 text-blue-600 dark:text-gray-400">
// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     width="16"
// //                     height="16"
// //                     fill="currentColor"
// //                     className="bi bi-pencil-square"
// //                     viewBox="0 0 16 16"
// //                   >
// //                     <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
// //                     <path
// //                       fill-rule="evenodd"
// //                       d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
// //                     />
// //                   </svg>
// //                 </button>
// //                 <button className="text-red-600 dark:text-gray-400">
// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     width="16"
// //                     height="16"
// //                     fill="currentColor"
// //                     className="bi bi-trash"
// //                     viewBox="0 0 16 16"
// //                   >
// //                     <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
// //                     <path
// //                       fill-rule="evenodd"
// //                       d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
// //                     />
// //                   </svg>
// //                 </button>
// //               </div>
// //             </div>{" "}
// //             Task end
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default taskDisplay;

import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/helpers/firebase";
import Task from "@/components/details";

const TaskDisplay = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Function to fetch tasks from Firestore
    const fetchTasks = async () => {
      const tasksCollection = collection(db, "tasks");
      const tasksSnapshot = await getDocs(tasksCollection);
      const tasksData = tasksSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(tasksData);
    };

    // Call the fetchTasks function
    fetchTasks();
  }, []); // Run this effect only once when the component mounts

  return (
    <>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 ">
        <div className="p-4 bg-white rounded-md shadow md:p-6 dark:bg-gray-900 ">
          <h2 className="pb-4 text-xl font-bold border-b dark:border-gray-700 dark:text-gray-400">
            Task overview
          </h2>
          <div className="px-4 py-3 text-xs font-medium">
            <div className="flex px-4 mb-3 text-gray-500 dark:text-gray-400">
              <h2 className="mr-auto">Task Name</h2>
              <h2>Action</h2>
            </div>

            {/* Iterate over tasks and display them */}
            {tasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskDisplay;
// uncomment begin
// import React, { useEffect, useState } from "react";
// import {
//   collection,
//   getFirestore,
//   query,
//   where,
//   onSnapshot,
//   DocumentData,
//   Unsubscribe,
// } from "firebase/firestore";
// import Link from "next/link";
// import Task from "@/components/details";
// import { app, auth, db } from "@/helpers/firebase";

// const TaskDisplay = () => {
//   const [tasks, setTasks] = useState<DocumentData[]>([]);
// uncomment here first
// //   useEffect(() => {
//     const q = query(collection(db, "tasks"), where("userId", "==", auth.currentUser?.uid));

//     const unsubscribe: Unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const updatedTasks: DocumentData[] = [];
//       querySnapshot.forEach((doc) => {
//         updatedTasks.push({ id: doc.id, ...doc.data() });
//       });
//       setTasks(updatedTasks);
//     });

//     return () => unsubscribe();
//   }, []);
// useEffect(() => {
//   const userId = auth.currentUser?.uid;

//   if (userId) {
//     const q = query(collection(db, "tasks"), where("userId", "==", userId));

//     const unsubscribe: Unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const updatedTasks: DocumentData[] = [];
//       querySnapshot.forEach((doc) => {
//         updatedTasks.push({ id: doc.id, ...doc.data() });
//       });
//       setTasks(updatedTasks);
//     });

//     return () => unsubscribe();
//   }
// }, []);

//   return (
//     <>
//       <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 ">
//         <div className="p-4 bg-white rounded-md shadow md:p-6 dark:bg-gray-900 ">
//           <h2 className="pb-4 text-xl font-bold border-b dark:border-gray-700 dark:text-gray-400">
//             Task overview
//           </h2>
//           <div className="px-4 py-3 text-xs font-medium">
//             <div className="flex px-4 mb-3 text-gray-500 dark:text-gray-400">
//               <h2 className="mr-auto">Task Name</h2>
//               <h2>Action</h2>
//             </div>
//             {/* task list  */}
//             {tasks.map((task: any) => (
//               <div key={task.id} className="flex justify-between p-4 mb-4 bg-gray-100 rounded dark:bg-gray-800">
//                 <div className="flex flex-wrap mb-2 lg:mb-4">
//                   <img
//                     className="object-cover mb-2 mr-4 rounded-full w-14 h-14 lg:mb-0"
//                     src="https://i.postimg.cc/pr2Q6n1w/pexels-italo-melo-2379005.jpg"
//                     alt=""
//                   />
//                   <div>
//                     <p className="task-description font-bold dark:text-gray-400">{task.task}</p>
//                     <p className="time-started text-sm text-gray-400">{task.startTime}</p>
//                   </div>
//                 </div>
//                 <div className="flex">
//                   <button className="mr-2 text-blue-600 dark:text-gray-400">
//                     {/* Add your edit icon/svg here */}
//                     Edit
//                   </button>
//                   <button className="text-red-600 dark:text-gray-400">
//                     {/* Add your delete icon/svg here */}
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TaskDisplay;
