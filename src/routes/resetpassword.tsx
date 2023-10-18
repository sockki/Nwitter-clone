import { useState } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import {
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  Error,
  Form,
  Input,
  Title,
  Wrapper,
} from "../components/auth-components";
export default function ResetPassword() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    }
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (loading || email === "") return;
    setLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("이메일을 확인해 주세요!");
        navigate("/login");
      })
      .catch((e) => {
        if (e instanceof FirebaseError) {
          setError(e.message);
        }
      });
    setLoading(false);
  };

  return (
    <Wrapper>
      <Title>Enter your email</Title>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          name="email"
          value={email}
          placeholder="Email"
          type="email"
          required
        />

        <Input type="submit" value={loading ? "Loading..." : "enter"} />
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
    </Wrapper>
  );
}
