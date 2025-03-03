import React from "react";
import PreviewImage from "./PreviewImage";
import DetailArticle from "./DetailArticle";

export default function Main() {
  return (
    <div className="flex justify-center  sm:px-20 sm:mt-20 max-w-screen-2xl mx-auto flex-col sm:flex-row sm:ml-20">
      <PreviewImage />
      <DetailArticle />
    </div>
  );
}
