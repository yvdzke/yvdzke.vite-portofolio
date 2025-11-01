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
            <h2>Hi, Welcome to Home</h2>
            <p>
              Mau kemana lagi nih? Coba klik tombol about di Paragraf Home untuk
              liat about me hehehe thanks.
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
