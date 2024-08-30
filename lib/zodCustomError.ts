import { z, ZodErrorMap, ZodIssueCode } from "zod";

const errorMap: ZodErrorMap = (issue) => {
  switch (issue.code) {
    case ZodIssueCode.too_small:
      if (issue.minimum === 1) {
        return {
          message: `Field tidak boleh kosong`,
        };
      }
      if (issue.minimum > 1) {
        return {
          message: `Field harus terdiri minimal ${issue.minimum} Karakter`,
        };
      }
      return { message: `Value terlalu kecil` };
    case ZodIssueCode.invalid_type:
      return {
        message: `Jenis yang diharapkan adalah ${issue.expected}, tetapi ditemukan ${issue.received}`,
      };
    case ZodIssueCode.invalid_literal:
      return {
        message: `Nilai harus persis ${JSON.stringify(issue.expected)}`,
      };
    case ZodIssueCode.unrecognized_keys:
      return { message: `Kunci yang tidak dikenali: ${issue.keys.join(", ")}` };
    case ZodIssueCode.invalid_union:
      return {
        message: `Nilai tidak cocok dengan salah satu tipe dalam union`,
      };
    case ZodIssueCode.invalid_enum_value:
      return {
        message: `Nilai harus salah satu dari: ${issue.options.join(", ")}`,
      };
    case ZodIssueCode.invalid_arguments:
      return { message: `Argumen tidak valid` };
    case ZodIssueCode.invalid_return_type:
      return { message: `Tipe pengembalian tidak valid` };
    case ZodIssueCode.invalid_date:
      return { message: `Tanggal tidak valid` };
    case ZodIssueCode.invalid_string:
      return { message: `String tidak valid` };
    default:
      return { message: `Kesalahan tidak diketahui` };
  }
};

z.setErrorMap(errorMap);

export default errorMap;
