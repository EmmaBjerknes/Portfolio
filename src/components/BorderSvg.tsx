function BorderSvg() {
  return (
    <>
      <svg
        data-name="corner-top-left"
        xmlns="http://www.w3.org/2000/svg"
        data-inlinesvg=".inlineSvgFile-1"
        style={{ width: "100px", height: "100px" }}
      >
        <defs>
          <linearGradient id="grad1" x1="-15%" y1="15%" x2="40%" y2="75%">
            <stop offset="0" style={{ stopColor: "purple" }}></stop>
            <stop offset=".5" style={{ stopColor: "yellow" }}></stop>
            <stop offset="1" style={{ stopColor: "purple" }}></stop>
          </linearGradient>
        </defs>
        <path
          fill="url('#grad1')"
          d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a15 15 0 0 1 15-8Z"
        ></path>
      </svg>
    </>
  );
}

export default BorderSvg;
