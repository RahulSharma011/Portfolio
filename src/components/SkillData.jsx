import React from 'react'
import { Row, Col } from 'react-bootstrap'
import '../Style/about.css';
import { DiBootstrap, DiCss3, DiHtml5, DiJava, DiJavascript1, DiMongodb, DiNodejs, DiReact, DiSass } from "react-icons/di";
import { SiExpress } from 'react-icons/si'; 
const SkillData = () => {
    return (
        <Row className='text-white justify-center pb-12 grid grid-flow-col grid-rows-2 max-lg:grid-rows-3 max-md:grid-rows-4 max-sm:grid-rows-5'>
            <Col className='tech-icons'><DiReact /></Col>
            <Col className='tech-icons'><DiJavascript1 /></Col>
            <Col className='tech-icons'><DiCss3 /></Col>
            <Col className='tech-icons'><DiHtml5 /></Col>
            <Col className='tech-icons'><DiJava /></Col>
            <Col className='tech-icons'><DiNodejs /></Col>
            <Col className='tech-icons'><SiExpress /></Col>
            <Col className='tech-icons'><DiMongodb /></Col>
            <Col className='tech-icons'><DiSass /></Col>
            <Col className='tech-icons'><DiBootstrap /></Col>
        </Row>
    )
}

export default SkillData