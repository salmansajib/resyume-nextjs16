import React from "react";

export default function LinkedinIcon({ className, width = 18, height = 18 }) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 22V13.9425C22 9.98252 21.1475 6.95752 16.5275 6.95752C14.3 6.95752 12.815 8.16752 12.21 9.32252H12.155V7.31502H7.78247V22H12.3475V14.7125C12.3475 12.7875 12.705 10.945 15.07 10.945C17.4075 10.945 17.435 13.1175 17.435 14.8225V21.9725H22V22Z"
        fill="currentColor"
      />
      <path
        d="M0.357422 7.31497H4.92242V22H0.357422V7.31497Z"
        fill="currentColor"
      />
      <path
        d="M2.64 0C1.1825 0 0 1.1825 0 2.64C0 4.0975 1.1825 5.3075 2.64 5.3075C4.0975 5.3075 5.28 4.0975 5.28 2.64C5.28 1.1825 4.0975 0 2.64 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
