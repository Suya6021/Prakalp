"use client";
import React from "react";

const DownloadButton = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch("/PrakalpTimeTable.pdf"); // Adjust the path based on the file location in the public folder
      const blob = await response.blob();

      // Create a download link and trigger the download
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Rulebook.pdf");
      document.body.appendChild(link);
      link.click();

      // Clean up the link and URL
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <div>
      <button
        className=" w-[150px] md:w-[200px] h-[50px] md:h-[60px] bg-[#060606] opacity-90 rounded-md text-white  transition-color text-lg hover:bg-red-300 hover:text-black "
        onClick={handleDownload}
      >
        Rule Book
      </button>
    </div>
  );
};

export default DownloadButton;
