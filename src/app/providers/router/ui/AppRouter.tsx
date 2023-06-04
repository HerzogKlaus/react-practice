import {Route, Routes} from "react-router-dom";
import React, {Suspense} from "react";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='page-wrapper'>
        <Routes>
          {Object.values(routeConfig).map(({element, path}) => (
            <Route key={path} element={element} path={path} />
          ))}
        </Routes>
      </div>
    </Suspense>
  );
};