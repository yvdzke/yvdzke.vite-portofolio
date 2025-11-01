import React from "react";
import "./styles/Dialog.css";

function DialogBox({ isOpen, onClose, type }) {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="dialog">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        {type === "home" && (
          <>
            <h2>Welcome Home</h2>
            <p>
              Ini adalah bagian Home. Di sini kamu bisa menampilkan deskripsi
              singkat tentang dirimu, atau pengantar ke website kamu.
            </p>
          </>
        )}

        {type === "projects" && (
          <>
            <h2>My Projects</h2>
            <p>
              Di sini kamu bisa menampilkan daftar proyek, link ke GitHub, atau
              screenshot hasil kerja kamu.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default DialogBox;
