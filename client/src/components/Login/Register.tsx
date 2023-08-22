import { FC, useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import { useForm } from "react-hook-form";
import { MDBBtn, MDBCol, MDBInput, MDBRow } from "mdb-react-ui-kit";
import axios from "axios";
import { toast } from "react-toastify";

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Register: FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/users/register", user);
      toast.success("Usuario registrado correctamente");
    } catch (error) {
      console.log(error);
      toast.error("Error al registrar usuario");
    }
    // } finally {
    //   setUser({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     password: "",
    //   });
    // }
  };

  return (
    <MainLayout>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          background: "grey",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
            marginBottom: "50px",
            background: "#EEE",
            borderTopLeftRadius: "60px",
            borderBottomRightRadius: "60px",
          }}
        >
          <form
            style={{
              width: "600px",
              padding: "20px",
              marginBottom: "25px",
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <MDBRow>
              <h3 style={{ textAlign: "center" }}>
                Register<span style={{ color: "orange" }}>Form</span>
              </h3>
            </MDBRow>
            <MDBRow style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  borderBottom: "1px solid grey",
                  width: "60%",
                  marginBottom: "20px",
                }}
              ></div>
            </MDBRow>
            <MDBRow style={{ marginBottom: "10px" }}>
              <span style={{ fontWeight: 600 }}>First Name :</span>
            </MDBRow>
            <MDBRow style={{ marginBottom: "25px" }}>
              <MDBCol>
                <MDBInput
                  {...register("firstName", {
                    required: "First name required!",
                    minLength: { value: 5, message: "Min 5 characters!" },
                    value: user.firstName,
                  })}
                  type="text"
                  onChange={(e) =>
                    setUser({ ...user, firstName: e.target.value })
                  }
                  label="first name..."
                />
                <p
                  style={{
                    color: "red",
                    marginBottom: 0,
                    position: "absolute",
                  }}
                >
                  {errors.firstName?.message}
                </p>
              </MDBCol>
            </MDBRow>

            <MDBRow style={{ marginBottom: "10px" }}>
              <span style={{ fontWeight: 600 }}>Last Name :</span>
            </MDBRow>
            <MDBRow style={{ marginBottom: "25px" }}>
              <MDBCol>
                <MDBInput
                  {...register("lastName", {
                    required: "Last name required!",
                    value: user.lastName,
                  })}
                  type="text"
                  onChange={(e) =>
                    setUser({ ...user, lastName: e.target.value })
                  }
                  label=" last name..."
                />
                <p
                  style={{
                    color: "red",
                    marginBottom: 0,
                    position: "absolute",
                  }}
                >
                  {errors.lastName?.message}
                </p>
              </MDBCol>
            </MDBRow>

            <MDBRow style={{ marginBottom: "10px" }}>
              <span style={{ fontWeight: 600 }}>Email :</span>
            </MDBRow>
            <MDBRow style={{ marginBottom: "25px" }}>
              <MDBCol>
                <MDBInput
                  {...register("email", {
                    required: "Email required!",
                    value: user.email,
                  })}
                  type="text"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  label="email..."
                />
                <p
                  style={{
                    color: "red",
                    marginBottom: 0,
                    position: "absolute",
                  }}
                >
                  {errors.email?.message}
                </p>
              </MDBCol>
            </MDBRow>

            <MDBRow style={{ marginBottom: "10px" }}>
              <span style={{ fontWeight: 600 }}>Password :</span>
            </MDBRow>
            <MDBRow style={{ marginBottom: "40px" }}>
              <MDBCol>
                <MDBInput
                  {...register("password", {
                    required: "Password required!",
                    minLength: {
                      value: 8,
                      message: "Min 8 characters",
                    },
                    value: user.password,
                  })}
                  type="text"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  label="password..."
                />
                <p
                  style={{
                    color: "red",
                    marginBottom: 0,
                    position: "absolute",
                  }}
                >
                  {errors.password?.message}
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow style={{ display: "flex", justifyContent: "center" }}>
              <MDBBtn style={{ width: "50%" }}>Register User</MDBBtn>
            </MDBRow>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default Register;
