import React from "react";

const Logo = ({ white, ...props }) => {
  return (
    <svg
      width={300}
      height={50}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-44.293 14.2 588.586 121.6"
      style={{
        background: "0 0",
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <filter id="editing-extrude-glow">
          <feFlood floodColor="#333" result="flood-1" />
          <feMorphology radius={1} in="SourceAlpha" result="erode" />
          <feComposite operator="in" in="flood-1" in2="erode" result="comp1" />
          <feConvolveMatrix
            order="3,3"
            divisor={1}
            in="comp1"
            result="convolve"
            kernelMatrix="0 0 0 1 1 1 0 0 0"
          />
          <feOffset dx={-3} in="convolve" result="extrude" />
          <feComposite
            operator="in"
            in="flood-1"
            in2="extrude"
            result="comp-extrude"
          />
          <feFlood floodColor="#000" result="flood-2" />
          <feComposite
            operator="in"
            in="flood-2"
            in2="SourceAlpha"
            result="comp2"
          />
          <feMorphology
            operator="dilate"
            radius={1}
            in="comp2"
            result="dilate"
          />
          <feOffset dx={-4.5} in="dilate" result="offset" />
          <feGaussianBlur in="offset" stdDeviation={5.8} result="blur" />
          <feComponentTransfer in="blur" result="shadow">
            <feFuncA type="linear" slope={0.8} intercept={-0.2} />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="comp-extrude" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#editing-extrude-glow)">
        <path
          d="M89.127 106.04q-7.75 0-7.75-6.02 0-2.62 1.12-7.71t1.51-7.13q.89-4.68.89-6.15 0-3.26-2.43-3.26-1.6 0-3.13 2.21-1.54 2.2-2.24 6.62l-3.97 20.16-12.48 1.28 3.45-17.41q.58-2.88 1.09-6.14.51-3.27.51-3.78 0-2.94-2.17-2.94-1.47 0-3.07 2.17-1.6 2.18-2.5 6.66l-3.9 20.16-12.61 1.28 6.72-33.92 10.43-1.28-1.09 6.46q1.67-3.45 4.74-4.96 3.07-1.5 7.87-1.5 2.75 0 4.54 1.34 1.8 1.35 2.37 3.52 1.09-2.24 3.87-3.55 2.79-1.31 6.21-1.31 3.43 0 5.12.74 1.7.73 2.72 1.95 1.73 2.24 1.73 6.33 0 4.04-1.73 12.42-.89 4.1-.89 5.6t.86 2.4q.86.9 2.14 1.02-.64 2.18-2.84 3.46-2.21 1.28-5.09 1.28Zm28.22-4.8q-1.98 4.8-8.32 4.8-3.26 0-5.31-2.24-1.73-1.98-1.73-3.97 0-5.18 2.37-15.29l2.37-12.42 12.99-1.28-3.9 20.22q-1.09 4.74-1.09 6.4 0 3.65 2.62 3.78Zm-9.47-38.02q0-2.49 2.08-3.84 2.08-1.34 5.09-1.34t4.83 1.34q1.82 1.35 1.82 3.84 0 2.5-2.01 3.78-2.02 1.28-5.03 1.28-3 0-4.89-1.28-1.89-1.28-1.89-3.78Zm46.34 14.92q0 2.68-2.24 4.35-2.24 1.66-5.89 1.66-1.54 0-2.43-.45.7-1.66.92-3.74.23-2.08.23-2.66 0-2.68-1.86-2.68-1.28 0-2.72 1.6-1.44 1.6-2.65 4.09-2.69 5.76-2.69 11.59 0 3.2 1.21 4.64 1.22 1.44 3.91 1.44 3.71 0 6.65-3.08.84-.96 1.28-2.04 2.44 1.28 2.44 4.8 0 3.58-3.97 5.95-4.1 2.43-10.63 2.43-12.99 0-12.99-13.76 0-10.05 5.7-15.81 5.5-5.63 15.61-5.63 10.12 0 10.12 7.3Zm21.76 8.64q2.3-4.1 2.3-8.26 0-2.75-1.98-2.75-1.54 0-3.14 2.62-1.66 2.63-2.18 6.02l-3.32 20.35-13.25 1.28 6.53-33.92 10.56-1.28-1.16 6.46q3.14-6.46 10.18-6.46 3.71 0 5.73 1.92 2.01 1.92 2.01 5.86 0 3.93-2.59 6.43-2.59 2.49-7.01 2.49-1.92 0-2.68-.76Zm27.26 19.26q-14.08 0-14.08-13.25 0-9.41 5.18-15.49 5.51-6.46 15.04-6.46 6.92 0 10.44 3.2 3.52 3.2 3.52 9.92 0 10.24-5.51 16.19-5.37 5.89-14.59 5.89Zm1.66-27.84q-.76 1.73-1.37 4.32-.61 2.59-1.38 6.69-.77 4.09-.77 9.15 0 1.66.55 2.75.54 1.09 2.01 1.09 1.48 0 2.4-.7.93-.71 1.64-2.37 1.28-2.95 2.3-8.42 1.02-5.47 1.12-7.84.1-2.37.1-4.13 0-1.76-.52-2.91-.51-1.15-1.95-1.15t-2.4.9q-.96.89-1.73 2.62Zm68.29 27.84q-7.74 0-7.74-6.02 0-2.62 1.12-7.71t1.5-7.13q.9-4.68.9-6.15 0-3.26-2.43-3.26-1.6 0-3.14 2.21-1.54 2.2-2.24 6.62l-3.97 20.16-12.48 1.28 3.46-17.41q.57-2.88 1.09-6.14.51-3.27.51-3.78 0-2.94-2.18-2.94-1.47 0-3.07 2.17-1.6 2.18-2.5 6.66l-3.9 20.16-12.61 1.28 6.72-33.92 10.43-1.28-1.08 6.46q1.66-3.45 4.73-4.96 3.07-1.5 7.87-1.5 2.76 0 4.55 1.34 1.79 1.35 2.37 3.52 1.08-2.24 3.87-3.55 2.78-1.31 6.21-1.31 3.42 0 5.12.74 1.69.73 2.72 1.95 1.72 2.24 1.72 6.33 0 4.04-1.72 12.42-.9 4.1-.9 5.6t.86 2.4q.87.9 2.15 1.02-.64 2.18-2.85 3.46-2.21 1.28-5.09 1.28Zm38.79-12.1q1.6 1.09 1.6 3.49 0 2.4-1.22 3.94-1.22 1.53-3.2 2.56-4.1 2.11-8.51 2.11-4.42 0-7.01-.96t-4.32-2.75q-3.39-3.39-3.39-9.6 0-9.67 5.25-15.55 5.63-6.34 15.42-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.46 11.26-.25 1.66-.25 3.07 0 2.95 1.31 4.07t3.74 1.12q2.43 0 5.03-1.12 2.59-1.12 3.68-2.92Zm-13.06-6.97q4.54 0 7.17-2.82 2.62-2.69 2.62-6.97 0-1.48-.54-2.28-.55-.8-1.63-.8-1.09 0-2.02.42-.93.42-1.89 1.82-2.37 3.2-3.71 10.63Zm41.22-.19q2.3-4.1 2.3-8.26 0-2.75-1.98-2.75-1.54 0-3.14 2.62-1.66 2.63-2.18 6.02l-3.32 20.35-13.25 1.28 6.53-33.92 10.56-1.28-1.16 6.46q3.14-6.46 10.18-6.46 3.71 0 5.73 1.92 2.01 1.92 2.01 5.86 0 3.93-2.59 6.43-2.59 2.49-7.01 2.49-1.92 0-2.68-.76Zm17.85-8.77q2.18-3.07 5.47-5.12 3.3-2.05 7.33-2.05t5.95 1.28l12.55-1.28-4.35 24.58q-2.24 12.54-6.98 17.47-4.54 4.67-13.38 4.67-6.72 0-10.56-2.11-3.84-2.11-3.84-5.63 0-2.63 1.99-4.13 1.98-1.51 5.05-1.51 2.69 0 4.74 1.22 1.22.64 1.79 1.54-1.47 1.28-1.47 3.39 0 2.75 2.56 2.75 4.29 0 6.72-10.11.7-2.75 1.28-5.51-2.88 3.52-9.41 3.52-4.54 0-7.17-2.17-2.62-2.18-2.62-7.3 0-3.2 1.09-6.81 1.09-3.62 3.26-6.69Zm8.32 13.69q0 4.36 2.24 4.36 1.54 0 3.01-1.67 1.15-1.34 1.6-3.33l3.26-16.44q-.32-.07-.64-.2-.64-.25-1.47-.25-3.9 0-6.21 6.4-1.79 4.99-1.79 11.13Zm51.39 2.24q1.6 1.09 1.6 3.49 0 2.4-1.21 3.94-1.22 1.53-3.2 2.56-4.1 2.11-8.51 2.11-4.42 0-7.01-.96t-4.32-2.75q-3.39-3.39-3.39-9.6 0-9.67 5.24-15.55 5.64-6.34 15.43-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.46 11.26-.26 1.66-.26 3.07 0 2.95 1.32 4.07 1.31 1.12 3.74 1.12t5.02-1.12q2.6-1.12 3.68-2.92Zm-13.05-6.97q4.54 0 7.17-2.82 2.62-2.69 2.62-6.97 0-1.48-.54-2.28-.55-.8-1.64-.8-1.08 0-2.01.42-.93.42-1.89 1.82-2.37 3.2-3.71 10.63Zm41.21-.19q2.31-4.1 2.31-8.26 0-2.75-1.99-2.75-1.53 0-3.13 2.62-1.67 2.63-2.18 6.02l-3.33 20.35-13.24 1.28 6.52-33.92 10.56-1.28-1.15 6.46q3.14-6.46 10.18-6.46 3.71 0 5.73 1.92 2.01 1.92 2.01 5.86 0 3.93-2.59 6.43-2.59 2.49-7.01 2.49-1.92 0-2.69-.76Z"
          fill="#eb6c6c"
        />
      </g>
      <style />
    </svg>
  );
};

export default Logo;