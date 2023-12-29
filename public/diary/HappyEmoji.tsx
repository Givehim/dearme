import React, { useState } from "react";

export default function HappyEmoji({ selected, onClick }) {
  // Selected 상태일 때의 SVG path
  const selectedPath = (
    <path
      d="M0 8C0 12.4194 3.58065 16 8 16C12.4194 16 16 12.4194 16 8C16 3.58065 12.4194 0 8 0C3.58065 0 0 3.58065 0 8ZM6.45161 6.45161C6.45161 7.02258 5.99032 7.48387 5.41935 7.48387C4.84839 7.48387 4.3871 7.02258 4.3871 6.45161C4.3871 5.88064 4.84839 5.41935 5.41935 5.41935C5.99032 5.41935 6.45161 5.88064 6.45161 6.45161ZM11.5645 6.98387C11.0871 6.55806 10.0742 6.55806 9.59677 6.98387L9.29032 7.25806C9.02258 7.49677 8.59355 7.27097 8.65161 6.90968C8.78065 6.09677 9.75484 5.55161 10.5839 5.55161C11.4129 5.55161 12.3871 6.09677 12.5161 6.90968C12.571 7.26774 12.1484 7.5 11.8774 7.25806L11.5645 6.98387ZM5.09032 10.2516C5.8129 11.1194 6.87097 11.6129 8 11.6129C9.12903 11.6129 10.1871 11.1161 10.9097 10.2516C11.3484 9.72903 12.1387 10.3871 11.7032 10.9129C10.7839 12.0129 9.43548 12.6452 8 12.6452C6.56452 12.6452 5.21613 12.0129 4.29677 10.9097C3.86129 10.3839 4.65806 9.72581 5.09032 10.2516Z"
      fill="black"
    />
  );

  // 기본 상태의 SVG path
  const defaultPath = (
    <path
      d="M8 0C3.58065 0 0 3.58065 0 8C0 12.4194 3.58065 16 8 16C12.4194 16 16 12.4194 16 8C16 3.58065 12.4194 0 8 0ZM8 14.4516C4.44194 14.4516 1.54839 11.5581 1.54839 8C1.54839 4.44194 4.44194 1.54839 8 1.54839C11.5581 1.54839 14.4516 4.44194 14.4516 8C14.4516 11.5581 11.5581 14.4516 8 14.4516ZM11.8 9.72903C11.471 9.45484 10.9839 9.5 10.7097 9.82903C10.0387 10.6355 9.04839 11.1 8 11.1C6.95161 11.1 5.96129 10.6387 5.29032 9.82903C5.01613 9.5 4.52581 9.45806 4.2 9.72903C3.87097 10.0032 3.82903 10.4903 4.1 10.8194C5.06774 11.9806 6.49032 12.6452 8 12.6452C9.50968 12.6452 10.9323 11.9806 11.9 10.8194C12.1742 10.4903 12.129 10.0032 11.8 9.72903ZM5.41935 7.48387C5.99032 7.48387 6.45161 7.02258 6.45161 6.45161C6.45161 5.88064 5.99032 5.41935 5.41935 5.41935C4.84839 5.41935 4.3871 5.88064 4.3871 6.45161C4.3871 7.02258 4.84839 7.48387 5.41935 7.48387ZM10.5806 5.54839C9.75161 5.54839 8.77742 6.09355 8.64839 6.90645C8.59355 7.26774 9.01935 7.49355 9.2871 7.25484L9.59355 6.98064C10.071 6.55484 11.0839 6.55484 11.5613 6.98064L11.8677 7.25484C12.1419 7.49355 12.5645 7.26452 12.5065 6.90645C12.3839 6.09355 11.4097 5.54839 10.5806 5.54839Z"
      fill="black"
    />
  );

  return (
    <svg
      onClick={onClick}
      width="27"
      height="27"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="happy-emoji"
    >
      <style jsx>{`
        .happy-emoji {
          transition:
            fill 0.2s ease,
            box-shadow: none;
        }
        .happy-emoji:hover {
          box-shadow: 0 0 14px rgba(0, 0, 0, 0.25); /* 그림자 추가 */
          border-radius: 50%; /* 모서리를 둥글게 */
        }
      `}</style>

      {selected ? selectedPath : defaultPath}
    </svg>
  );
}
