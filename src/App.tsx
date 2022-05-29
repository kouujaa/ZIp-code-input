import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import "./App.css";
import { TextFieldStyled, EditInputWrapper, MainWrapper } from "./App.style";

type FormData = {
  zip_code: string;
};

function App() {
  const formValidationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    zip_code: Yup.string()
      .required("Zip Code is required")
      .matches(/(^\d{5}$)|(^\d{5}-\d{4}$)/, "Please enter a valid Zip Code"),
  });
  const formOptions = { resolver: yupResolver(formValidationSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>(formOptions);

  const isValid = !errors.zip_code;

  const _onSubmit = () => {};
  return (
    <MainWrapper className="App">
      <form onSubmit={handleSubmit(_onSubmit)}>
        <div>
          <EditInputWrapper>
            <TextFieldStyled
              id="zip_code"
              label="Zip Code"
              variant="standard"
              helperText="Press Enter To Validate"
              {...register("zip_code")}
              required
            />
            {!isValid ? (
              <span style={{ color: "red" }}>Enter Valid Zip Code</span>
            ) : (
              <span style={{ color: "green" }}>Valid</span>
            )}
          </EditInputWrapper>
        </div>
      </form>
    </MainWrapper>
  );
}

export default App;
