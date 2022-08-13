import axios from "axios";
import { useState } from "react";

const useHttp = () => {
  const http = axios.create({
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      Accept: "application/json",
    },
    withCredentials: true,
  });

  http.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      return Promise.reject(err);
    }
  );

  http.interceptors.response.use(
    config => config,
    error => {
      if (error.response) {
        if (error.response.status === 408 || error.code === "ECONNABORTED") {
          console.log("Connection error");
        }
        if (error.response.status === 401) {
          console.log("Unauthorized");
        }
        if (error.response.status === 422) {
          console.log("Unprocessable entity");
        }
      }
      return Promise.reject(error);
    }
  );

  return { http };
};

export default useHttp;
