function BorderSvg() {
  return (
    <>
      <svg
        data-name="corner-top-left"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "80px", height: "80px" }}
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0" style={{ stopColor: "purple" }}></stop>
            <stop offset=".8" style={{ stopColor: "yellow" }}></stop>
            <stop offset="1" style={{ stopColor: "purple" }}></stop>
          </linearGradient>
        </defs>
        <path
          fill="url('#grad1')"
          d="M8 0h64l-8 8H17.5a5 5 0 0 0-5 5v37.5L0 56.5V8a15 15 0 0 1 8-8Z"
        ></path>
      </svg>
    </>
  );
}

export default BorderSvg;
