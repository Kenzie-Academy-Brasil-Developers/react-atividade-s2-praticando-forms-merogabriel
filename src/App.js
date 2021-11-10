import "./App.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function App() {
  const formSchema = yup.object().shape({
    user: yup.string().required("Username required").max(9, 'Max: 9 digits'),
    name: yup.string().required("Name required"),
    email: yup.string().required("Email required").email("Invalid"),
    password: yup.string().required("Password required"),
    emailAgain: yup
      .string()
      .required("Password again required")
      .email("Invalid"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => console.log(data);

  return (
    <div className="App">
      <h3>Form</h3>
      <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
        <input placeholder="Username*" {...register("user")} />
        {errors.user?.message}
        <input placeholder="Name*" {...register("name")} />
        {errors.name?.message}
        <input placeholder="Email*" {...register("email")} />
        {errors.email?.message}
        <input placeholder="Email again*" {...register("emailAgain")} />
        {errors.emailAgain?.message}
        <input placeholder="Password*" type='password' {...register("password")} />
        {errors.password?.message}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
