import { PopupButton } from "@typeform/embed-react";

const GetAccessButton = ({ styling, text }: any) => {
  const id = "svaWldnk";
  return (
    <>
      <PopupButton id={id} className={styling}>
        {text}
      </PopupButton>
    </>
  );
};

export default GetAccessButton;
