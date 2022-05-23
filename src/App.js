import logo from './logo.svg';
import './App.css';
import Row from 'react-bootstrap/Row';
import {Container} from "react-bootstrap";
import {Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <div>
        <Container className="align-middle mt-lg-5">
          <Row>
            <p class="fw-bold h1">
              Fun with AI
            </p>
          </Row>
          <Row>
            <div className="form-group mt-3">
              <label className="fw-bold" htmlFor="exampleFormControlTextarea1">
                Enter prompt
              </label>
              <textarea className="form-control border border-dark mt-1"
                        id="exampleFormControlTextarea1" rows="10"></textarea>
              <button type="submit"
                      className="btn btn-primary mt-sm-1 float-end btn-lg">
                Submit
              </button>
            </div>
          </Row>
          <Row>
            <p class="fw-bold h3">
              Response
            </p>
          </Row>
          <Row>
            <div class="card bg-light">
              <div class="row">
                <div class="col-2 fw-bold">
                  Prompt:
                </div>
                <div class="col-8">
                  blablalba
                </div>

              </div>
              <div className="row">
                <div className="col-2 fw-bold">
                  Response:
                </div>
                <div className="col-8">
                  blablalba
                </div>

              </div>
            </div>
          </Row>
        </Container>
      </div>
  );
}

export default App;
