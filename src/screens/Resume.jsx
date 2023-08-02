import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../components/Particle";
import pdf from "../Assets/rahulresume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "../Style/resume.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div className='background-image min-h-full'>
    <div className='pt-[70px] max-sm:pt-[55px]'>
    <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <div className="bg-cyan-300 py-2 px-3 rounded-lg w-56 m-auto flex justify-center">
          <Button 
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload className="float-left mt-1" />
            &nbsp;Download CV
          </Button>
          </div>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="flex justify-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} renderTextLayer={false} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
        <div className="bg-cyan-300 py-2 px-3 rounded-lg w-56 m-auto flex justify-center">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload className="float-left mt-1" />
            &nbsp;Download CV
          </Button>
          </div>
        </Row>
      </Container>
    </div>
    </div>
  )
}

export default Resume;