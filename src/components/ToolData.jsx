import React from 'react'
import '../Style/about.css';
import { Row, Col } from 'react-bootstrap'
import { DiGit,DiWindows, DiVisualstudio } from 'react-icons/di'
import {SiPostman,SiVercel} from 'react-icons/si'

const ToolData = () => {
    return (
        <Row className='text-white justify-center pb-12 grid grid-flow-col grid-rows-1 max-lg:grid-rows-2 max-md:grid-rows-3 max-sm:grid-rows-3'>
            <Col className='tech-icons'><DiWindows /></Col>
            <Col className='tech-icons'><DiGit /></Col>
            <Col className='tech-icons'><DiVisualstudio /></Col>
            <Col className='tech-icons'><SiPostman /></Col>
            <Col className='tech-icons'><SiVercel /></Col>
            

        </Row>
    )
}

export default ToolData