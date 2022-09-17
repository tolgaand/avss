import { ParsedCodeType } from "utils";

type PreviewProps = {
  data?: ParsedCodeType[];
};

export const Preview = (props: PreviewProps) => {
  const { data } = props;

  return (
    <>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <span style={{ flex: 1 }}>{item.name} </span>
            <span style={{ flex: 1 }}>{item.type} </span>
            <span style={{ flex: 1 }}>{item.size}</span>
          </div>
        );
      })}
    </>
  );
};
