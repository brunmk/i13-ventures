"use client";
import Image from "next/image";
import {
  FaCubes,
  FaListUl,
  FaPills,
  FaPlusSquare,
  FaRegFrown,
  FaRegLaughBeam,
} from "react-icons/fa";
import Card from "./components/card";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [canvas, setCanvas] = useState("selectCanvas");
  const [productsVisible, setproductsVisible] = useState(false);
  const [gaincVisible, setgaincVisible] = useState(false);
  const [painrVisible, setpainrVisible] = useState(false);
  const [gainVisible, setgainVisible] = useState(false);
  const [painVisible, setpainVisible] = useState(false);
  const [jobsVisible, setjobsVisible] = useState(false);

  useEffect(() => {
    if (canvas === "products") {
      setproductsVisible(true);
    }
    if (canvas === "gainc") {
      setgaincVisible(true);
    }
    if (canvas === "painr") {
      setpainrVisible(true);
    }
    if (canvas === "gain") {
      setgainVisible(true);
    }
    if (canvas === "pain") {
      setpainVisible(true);
    }
    if (canvas === "jobs") {
      setjobsVisible(true);
    }
  }, [canvas]);

  const canvasHandler = (e) => {
    setCanvas(e.target.value);
  };

  const inputRef = useRef(null);

  const [valueInput, setValueInput] = useState();

  const addHandler = () => {
    setValueInput(inputRef.current.value);
  };

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="canvas-left">
              <div className="text-primary ">
                <h4 className="fw-bold">Productos and Services</h4>
                <div className="text-center fa-icon">
                  <FaCubes />
                </div>
                {productsVisible && (
                  <div className="card bg-primary text-white">{valueInput}</div>
                )}
              </div>
              <div className="text-warning">
                <h4 className=" fw-bold">Gain Creators</h4>
                <div className="text-center fa-icon">
                  <FaPills />
                </div>
                {gaincVisible && (
                  <div className="card bg-warning text-white">{valueInput}</div>
                )}
              </div>
              <div className="text-success">
                <h4 className=" fw-bold">Pain Relievers</h4>
                <div className="text-center fa-icon">
                  <FaPills />
                </div>
                {painrVisible && (
                  <div className="card bg-success text-white">{valueInput}</div>
                )}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="canvas-right">
              <div className="text-info">
                <h4 className=" fw-bold">Gain</h4>
                <div className="text-center fa-icon">
                  <FaRegLaughBeam />
                </div>
                {gainVisible && (
                  <div className="card bg-info text-white">{valueInput}</div>
                )}
              </div>
              <div className="text-secondary">
                <h4 className=" fw-bold">Costumer Jobs</h4>
                <div className="text-center fa-icon">
                  <FaListUl />
                </div>
                {jobsVisible && (
                  <div className="card bg-secondary text-white">
                    {valueInput}
                  </div>
                )}
              </div>
              <div className="text-danger">
                <h4 className=" fw-bold">Pain</h4>
                <div className="text-center fa-icon">
                  <FaRegFrown />
                </div>
                {painVisible && (
                  <div className="card bg-danger text-white">{valueInput}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-add position-absolute bottom-0 end-0">
        <button
          className="btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <FaPlusSquare />
        </button>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h1 className="modal-title fw-semibold fs-4">
                Place your sticker in the canvas:
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-5">
                  <select
                    className="form-select"
                    value={canvas}
                    onChange={canvasHandler}
                  >
                    <option selected>choose where to pin your sticker </option>
                    <option value="products">Products and Services</option>
                    <option value="gainc">Gain Creators</option>
                    <option value="painr">Pain Relievers</option>
                    <option value="gain">Gains</option>
                    <option value="pain">Pains</option>
                    <option value="jobs">Costumer Jobs</option>
                  </select>
                </div>
                <h2 className="mb-3 fw-semibold fs-4">
                  Add a sticker to your canvas:
                </h2>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="type the text here"
                    id="inputText"
                    ref={inputRef}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer  border-0">
              <button
                type="button"
                onClick={addHandler}
                className="btn btn-lg btn-primary"
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
