import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { CustomEditor } from "../components/CustomEditor";
import { Preview } from "../components/Preview";
import { parseCode, ParsedCodeType } from "../utils";
export type NestedArray<T> = Array<T> | Array<NestedArray<T>>;

const test: NestedArray<[]>[] = Array(2).fill(Array(32).fill([]));

const defaultStringCode =
  "#[account]\npub struct Tweet {\npub author: Pubkey,\npub timestamp: i64,\npub topic: String,\npub content: String,\n}";

const Home: NextPage = () => {
  const [value, setValue] = useState(defaultStringCode);
  const [parsedCode, setParsedCode] = useState<ParsedCodeType[]>();

  useEffect(() => {
    setParsedCode(parseCode(value));
  }, [value]);

  return (
    <div
      style={{
        display: "flex",
        maxHeight: "100vh",
      }}
    >
      <div
        style={{
          flex: "1",
        }}
      >
        <CustomEditor value={value} setValue={setValue} />;
      </div>
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          padding: "20px",
        }}
      >
        <Preview data={parsedCode} />
      </div>
    </div>
  );
};

export default Home;
