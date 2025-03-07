/**
 * Copyright (c) 2024, WSO2 LLC (http://www.wso2.com) All Rights Reserved.
 *
 * WSO2 LLC licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import * as React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { GiCheckeredFlag } from "react-icons/gi";

import styles from './Intro.module.css';


export default function Intro() {

  return (

    <Col sm={12}>
      <Container>
        <Row className={`${styles.introBottomRow} ${styles.boxCol}`}>
          <Col xs={12} sm={12} md={12} lg={9} className={styles.description}>
            <h1>
              <span style={{ fontSize: "60px", fontWeight: "500" }}>Forging Integration Innovations</span>
              <br />
              <span style={{ fontSize: "47px", fontWeight: "300" }}>Ballerina Hackathon 2024</span>
            </h1>
            <p className={styles.desItem}>
              Join the <a href="https://ballerina.io/" className={styles.introLinks}> Ballerina</a> Community and the <a href='https://www.nust.na/' target='_blank' rel='noreferrer' className={styles.introLinks}> Namibia University of Science and Technology</a> for an exciting Hackathon in Namibia.
            </p>
          </Col>
          <Col xs={12} sm={12} md={12} lg={3} style={{ background: "#20b6b0", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "10px" }}>
            <GiCheckeredFlag style={{ marginBottom: "10px", fontSize: "80px" }} />
            <div style={{ fontWeight: 400, fontSize: "24px" }}>
              This event has ended.
            </div>
          </Col>
        </Row>
      </Container>
    </Col>

  );
}
