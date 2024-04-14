// icons.tsx
// 26-Nov-22
import * as React from "react";

// shuffle icon
export const ShuffleIcon = ({
  height = "16px",
  width = "16px",
  secondaryColor,
  ...props
}: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 16 16"
    clipRule="evenodd"
    fillRule="evenodd"
    className="shuffle"
    fill="currentColor"
    {...props}
  >
    <path d="M11.3425 5.5V6.1168C11.3425 6.43755 11.7136 6.61581 11.964 6.41546L13.36 5.29866C13.5514 5.14555 13.5514 4.85445 13.36 4.70134L11.964 3.58454C11.7136 3.38417 11.3425 3.5625 11.3425 3.88325V4.5H10.41C9.6234 4.5 8.80371 4.85977 8.34539 5.5703L5.304 9.85815C4.99746 10.2782 4.54805 10.5 4.06 10.5H3C2.72386 10.5 2.5 10.7239 2.5 11C2.5 11.2761 2.72386 11.5 3 11.5H4.06C4.87109 11.5 5.62097 11.1226 6.1144 10.4441L9.16783 6.13927C9.17267 6.13245 9.17734 6.1255 9.18183 6.11844C9.42493 5.73642 9.90074 5.5 10.41 5.5H11.3425Z" />
    <path d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H4.31C5.25663 4.5 6.11921 5.06248 6.55024 5.86295C6.68115 6.10609 6.59019 6.40932 6.34705 6.54024C6.10391 6.67115 5.80068 6.58018 5.66976 6.33705C5.40079 5.83752 4.86337 5.5 4.31 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z" />
    <path d="M8.93403 9.43526C8.78767 9.20109 8.4792 9.12991 8.24503 9.27626C8.01086 9.42262 7.93968 9.73109 8.08603 9.96526L8.33603 10.3653L8.3382 10.3687C8.78169 11.0656 9.5923 11.5003 10.41 11.5003H11.3425V12.1168C11.3425 12.4376 11.7136 12.6158 11.964 12.4155L13.36 11.2987C13.5514 11.1456 13.5514 10.8544 13.36 10.7013L11.964 9.58454C11.7136 9.38417 11.3425 9.5625 11.3425 9.88325V10.5003H10.41C9.92839 10.5003 9.43964 10.2356 9.18286 9.83339L8.93403 9.43526Z" />
  </svg>
);

// color icon
export const ListIcon = ({
  height = "11px",
  width = "11px",
  secondaryColor,
  ...props
}: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 11 11"
    clipRule="evenodd"
    fillRule="evenodd"
    {...props}
  >
    <path d="M4 1H1V4H4V1Z" fill="black" />
    <path d="M10 1H7V4H10V1Z" fill="black" />
    <path d="M10 7H7V10H10V7Z" fill="black" />
    <path d="M4 7H1V10H4V7Z" fill="black" />
  </svg>
);

// color icon
export const BackIcon = ({
  width = "20",
  height = "16",
  secondaryColor,
  ...props
}: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 20 16"
    clipRule="evenodd"
    fillRule="evenodd"
    {...props}
  >
    <path
      fill="#1C1C1C"
      d="M18.803 6.837H4.03L8.814 2.06A1.171 1.171 0 008.044 0c-.353 0-.67.156-.886.402L.338 7.193c-.108.11-.194.243-.25.39l-.002.008a1.172 1.172 0 00.003.888l-.003-.008c.058.156.144.289.252.399l6.82 6.789c.212.21.505.341.828.341a1.168 1.168 0 001.17-1.17c.001-.322-.13-.615-.34-.827L4.03 9.226h14.773a1.195 1.195 0 10-.001-2.389z"
    ></path>
  </svg>
);

// Dot icon
export const DotIcon = ({
  secondaryColor,
  ...props
}: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    clipRule="evenodd"
    fillRule="evenodd"
    className="shuffle"
    fill="currentColor"
    {...props}
  >
    <path
      d="M6 13.5C6.82843 13.5 7.5 12.8284 7.5 12C7.5 11.1716 6.82843 10.5 6 10.5C5.17157 10.5 4.5 11.1716 4.5 12C4.5 12.8284 5.17157 13.5 6 13.5Z"
      fill="currentColor"
    />
    <path
      d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z"
      fill="currentColor"
    />
    <path
      d="M19.5 12C19.5 12.8284 18.8284 13.5 18 13.5C17.1716 13.5 16.5 12.8284 16.5 12C16.5 11.1716 17.1716 10.5 18 10.5C18.8284 10.5 19.5 11.1716 19.5 12Z"
      fill="currentColor"
    />
  </svg>
);

// Cross icon
export const CrossIcon = ({
  secondaryColor,
  ...props
}: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 16 16"
    clipRule="evenodd"
    fillRule="evenodd"
    className="shuffle"
    fill="currentColor"
    {...props}
  >
    <path
      d="M12.7688 4.34772C13.0771 4.03941 13.0771 3.53954 12.7688 3.23123C12.4605 2.92292 11.9606 2.92292 11.6523 3.23123L8 6.88352L4.34772 3.23123C4.03941 2.92292 3.53954 2.92292 3.23123 3.23123C2.92292 3.53954 2.92292 4.03941 3.23123 4.34772L6.88352 8L3.23123 11.6523C2.92292 11.9606 2.92292 12.4605 3.23123 12.7688C3.53954 13.0771 4.03941 13.0771 4.34772 12.7688L8 9.11648L11.6523 12.7688C11.9606 13.0771 12.4605 13.0771 12.7688 12.7688C13.0771 12.4605 13.0771 11.9606 12.7688 11.6523L9.11649 8L12.7688 4.34772Z"
      fill="currentColor"
    />
  </svg>
);

// Width icon
export const WidthIcon = ({
  secondaryColor,
  ...props
}: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 16 16"
    clipRule="evenodd"
    fillRule="evenodd"
    {...props}
  >
    <path
      d="M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4Z"
      fill="#152557"
      fill-opacity="0.05"
    ></path>
    <path
      d="M5.33532 12H6.44327L7.97381 6.55256H8.03063L9.56117 12H10.6656L12.6862 4.72727H11.5285L10.1151 10.3629H10.0477L8.57395 4.72727H7.43049L5.95676 10.3594H5.88929L4.47239 4.72727H3.31827L5.33532 12Z"
      fill="#8C94A1"
    ></path>
  </svg>
);

// Width icon
export const ArrowIcon = ({
  secondaryColor,
  ...props
}: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 10}
    height={props.height || 6}
    viewBox="0 0 10 6"
    clipRule="evenodd"
    fillRule="evenodd"
    {...props}
  >
    <path
      d="M4.31772 5.73639L0.279099 1.6391C-0.0644075 1.29057 -0.090831 0.749898 0.199828 0.371811L0.28015 0.279814C0.614115 -0.0590304 1.14545 -0.0908794 1.51642 0.18836L1.62091 0.279814L4.99919 3.70793L8.37909 0.279814C8.71305 -0.0590304 9.24439 -0.0908794 9.61536 0.18836L9.7209 0.280881C10.093 0.658451 10.093 1.26153 9.7209 1.6391L5.69757 5.72123C5.53059 5.89065 5.31426 5.98332 5.09331 5.99873L4.92828 6C4.70703 5.98965 4.4886 5.90194 4.31772 5.73639Z"
      fill="currentColor"
    />
  </svg>
);
