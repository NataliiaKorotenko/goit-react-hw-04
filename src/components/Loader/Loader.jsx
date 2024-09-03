import { Audio } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color="rgb(128,0,128)"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
}
