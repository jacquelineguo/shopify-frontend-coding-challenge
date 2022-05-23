import { useState } from "react";
import { useQuery } from 'react-query';
import getCompletions from "../data-hooks/useGetCompletions";
import Row from "react-bootstrap/Row";
import {Container, Form} from "react-bootstrap";


export default function ResponseCard() {
  const [input, setInput] = useState("");
  const [requestBody, setRequestBody] = useState("");
  const { isLoading, error, data, refetch } = useQuery('getCompletions',
      () => getCompletions(requestBody),{
        refetchOnWindowFocus: false,
        enabled: false
      }
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  console.log('res', data)

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  }
  const handleClick = () => {
    setRequestBody(input);
    refetch();
  }
  return (<Container className="align-middle mt-lg-5">
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
                        id="exampleFormControlTextarea1"
                        rows="10"
                        value={input}
                        onChange={handleChange}></textarea>
        <button type="submit"
                className="btn btn-primary mt-sm-1 float-end btn-lg"
                onClick={handleClick}>
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
            {requestBody}
          </div>
        </div>
        <div className="row">
          <div className="col-2 fw-bold">
            Response:
          </div>
          <div className="col-8">
            {data && <h1>{data.choices[0].text}</h1>}
          </div>

        </div>
      </div>
    </Row>
  </Container>
  )
}
