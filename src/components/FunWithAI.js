import { useState } from "react";
import { useQuery } from 'react-query';
import getCompletions from "../data-hooks/useGetCompletions";
import {Container, Row, Col} from "react-bootstrap";


export default function FunWithAI() {
  const [input, setInput] = useState("");
  const [requestBody, setRequestBody] = useState("");
  const { isLoading, error, isSuccess, data } = useQuery(`getCompletions-${requestBody}`,
      () => getCompletions(requestBody),{
        refetchOnWindowFocus: false,
        enabled: requestBody!==""
      }
  )
  console.log(error);

  const renderResponse = () => {
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message

    let responses = JSON.parse(localStorage.getItem("responses") || "[]");
    if (isSuccess && !responses.some(i => i.Prompt === requestBody && i.Response === data?.choices[0]?.text)) {
      responses.push({Prompt: requestBody, Response: data?.choices[0]?.text})
      localStorage.setItem("responses", JSON.stringify(responses));
    }
    return <>
      {responses.map(data =>
          <div className="card border-0 bg-secondary bg-opacity-10 mt-3 p-3">
              <div className="row">
                <div className="col-2 fw-bold">
                  Prompt:
                </div>
                <div className="col-8">
                  {data.Prompt}
                </div>
              </div>
              <div className="row">
                <div className="col-2 fw-bold">
                  Response:
                </div>
                <div className="col-8">
                  {data.Response}
                </div>
              </div>
            </div>
    )}
    </>
  }

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  }
  const handleClick = () => {
    setRequestBody(input);
  }
  const handleClear = () => {
    localStorage.removeItem('responses');
    window.location.reload();
  }
  return (<Container className="align-middle mt-lg-5">
    <Row>
      <p class="fw-bolder h1">
        Fun with AI
      </p>
    </Row>
    <Row>
      <div className="form-group mt-3">
        <label className="fw-bold" htmlFor="exampleFormControlTextarea1">
          Enter prompt
        </label>
              <textarea className="form-control border border-dark mt-1"
                        id="exampleFormControlTextarea1"
                        rows="10"
                        value={input}
                        onChange={handleChange}></textarea>
        <button type="submit"
                disabled={isLoading}
                className="btn btn-primary mt-sm-1 float-end btn-lg"
                onClick={handleClick}>
          Submit
        </button>
      </div>
    </Row>
    <Row className="mt-1">
      <Col>
      <p class="fw-bolder h3">
        Response
      </p>
      </Col>

      <Col>
      <button type="submit"
              className="btn btn-secondary float-end"
              onClick={handleClear}>
        Clear Responses
      </button>
    </Col>
    </Row>
    <Row>
      {renderResponse()}
    </Row>
  </Container>
  )
}
