import "./bar.scss";

type barProps = {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Bar({ open, setOpen }:barProps) {
  return (
    <button
      className="button-menu"
      type="button"
      onClick={() => setOpen(!open)}
      aria-expanded={open}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
