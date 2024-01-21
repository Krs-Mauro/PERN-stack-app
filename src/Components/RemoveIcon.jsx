import Spinner from "./Spinner";

const Remove = ({ loading }) =>
  loading ? (
    <Spinner />
  ) : (
    <svg
      width="20"
      height="20"
      viewBox="0 0 191 191"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M163.993 85.8844V177.71C163.993 180.948 161.369 183.571 158.132 183.571H33.0924C29.8554 183.571 27.2312 180.948 27.2312 177.71V85.8844"
        stroke="#fa4217"
        stroke-width="14.6531"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M76.0748 144.497V85.8844"
        stroke="#fa4217"
        stroke-width="14.6531"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M115.15 144.497V85.8844"
        stroke="#fa4217"
        stroke-width="14.6531"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M183.531 46.8095H134.687M134.687 46.8095V13.5959C134.687 10.3589 132.063 7.7347 128.826 7.7347H62.3986C59.1616 7.7347 56.5374 10.3589 56.5374 13.5959V46.8095M134.687 46.8095H56.5374M7.69385 46.8095H56.5374"
        stroke="#fa4217"
        stroke-width="14.6531"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

export default Remove;
