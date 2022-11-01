import Image from "next/image";
import Link from "next/link";
import Logo from "../components/common/logo/logo";
import LayoutGuest from "../components/layout/layoutGuest";
import styles from "../styles/Home.module.css";
export default function Login() {
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/login";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    if(!result.state){
      result.data;
    }
    else{
      //redirect to dashbaord
    }
    // alert(`Is this your full name: ${result.data}`);
  };

  return (
    <LayoutGuest>
      <div className={styles}>
        <main className={styles.main}>
          <div className="container-fluid">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 py-5 mb-5">
                  <Logo />

                  <h2 className="mb-2 mt-5">Welcome Back!!</h2>
                  <h4 className="mb-5">Please sign in to your account</h4>
                  <form
                    className="pe-5"
                    action="/api/login"
                    method="post"
                    onSubmit={handleSubmit}
                  >
                    <div className="mb-3">
                      <input
                        type="email"
                        name="email"
                        className="form-control border-0 border-bottom border-dark rounded-0"
                        id="exampleFormControlInput1"
                        placeholder="Email or Phone Number"
                        required
                      ></input>
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        name="password"
                        className="form-control border-0 border-bottom border-dark rounded-0 mt-4"
                        id="exampleFormControlInput1"
                        placeholder="Password"
                        required
                      ></input>
                    </div>

                    <div className="form-check small-text-14 mt-5">
                      <div className="row">
                        <div className="col">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          ></input>
                          <label
                            className="form-check-label"
                            for="flexCheckDefault"
                          >
                            <a href="#">Remember me</a>
                          </label>
                        </div>
                        <div className="col text-end">
                          <p>
                            <Link href={"forgotpassword"}>
                              <a>Forgot Password?</a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row text-center justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success rounded-pill mt-5 col-5 align-middle my-5"
                      >
                        {" "}
                        Signin
                      </button>

                      <p className="small-text-14 mt-0">
                        New on our platform?{" "}
                        <Link href={"/register"}>
                          <a>Create an account</a>
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                  <Image
                    className="img-fluid"
                    width={797}
                    height={1080}
                    alt="Welcome Image"
                    src="/image/landingpg/welcome.png"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </LayoutGuest>
  );
}
