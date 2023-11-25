import * as Yup from "yup";

export const validationSchema = Yup.object({
  phoneNumber: Yup.number()
    .typeError("Phone number must be a number")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password must match")
    .required("Required"),
});

