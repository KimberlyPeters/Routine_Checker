// react imports
import React from 'react';

const TaskActivity = () => {
  return (
    <div className="p-6 mb-6 bg-white rounded shadow card dark:bg-gray-900">
      <h2 className="mb-6 text-xl font-semibold dark:text-gray-400">Notification</h2>
      <div className="flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             className="w-8 h-8 mr-4 text-blue-500" viewBox="0 0 16 16">
          <path
            d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
          <path
            d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
        </svg>
        <div>
          <p className="font-semibold dark:text-gray-400"> New Product has been purchased successfully</p>
          <p className="text-sm text-gray-400"> 10 minutes ago</p>
        </div>
      </div>
    </div>
  );
};

export default TaskActivity;
