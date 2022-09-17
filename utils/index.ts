type StructTypeWithSizeType = {
  [key: string]: number;
};

export type ParsedCodeType = {
  name: string;
  type: string;
  size: number;
};

const structTypeWithSize: StructTypeWithSizeType = {
  bool: 1,
  u8: 1,
  i8: 1,
  u16: 2,
  i16: 2,
  u32: 4,
  i32: 4,
  u64: 8,
  i64: 8,
  Pubkey: 32,
};

export const parseCode = (stringCode: string): ParsedCodeType[] => {
  const fields = stringCode.match(/pub (\w+): (\w+)/g)?.map((field) => {
    const getFields = field.match(/pub (\w+): (\w+)/);

    const [name, type] = getFields ? getFields.slice(1) : [];
    return {
      name,
      type,
      size: structTypeWithSize[type],
    };
  });

  return fields || [];
};
