import Input from "./Input";
import CardForm from "./CardForm";
import Title from "./Title";
import { useForm } from "../../../hooks";
import ErrorText from "./ErrorText";
import Button from "./Button";

const SignUpForm = ({ onSubmit }) => {
  const { errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      name: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit,
    validate: ({ name, password, passwordConfirm }) => {
      const newErrors = {};
      if (!name) {
        newErrors.name = "이름을 입력해주세요.";
      }
      if (!password) {
        newErrors.password = "비밀번호를 입력해주세요.";
      }
      if (password !== passwordConfirm) {
        newErrors.passwordConfirm = "비밀번호가 일치하지 않습니다.";
      }
      return newErrors;
    },
  });

  return (
    <CardForm onSubmit={handleSubmit}>
      <Title>Sign Up</Title>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      {errors.name && <ErrorText>{errors.name}</ErrorText>}
      <Input
        type="password"
        name="password"
        placeholder="Password"
        style={{ marginTop: 8 }}
        onChange={handleChange}
      />
      {errors.password && <ErrorText>{errors.password}</ErrorText>}
      <Input
        type="password"
        name="passwordConfirm"
        placeholder="Password Confirm"
        style={{ marginTop: 8 }}
        onChange={handleChange}
      />
      {errors.passwordConfirm && (
        <ErrorText>{errors.passwordConfirm}</ErrorText>
      )}
      <Button type="submit" disabled={isLoading} style={{ marginTop: 16 }}>
        Sign Up
      </Button>
    </CardForm>
  );
};

export default SignUpForm;
