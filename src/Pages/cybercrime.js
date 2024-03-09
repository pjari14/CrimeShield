import React from "react";
import { Link } from "react-router-dom";
import image from "../Assets/images/cyber-attack-2.jpg";
const Cybercrime = () => {
  return (
    <>
      <section class="cybercrimes">
        <div style={{ textAlign: "center" }}>
          <img class="" src={image} style={{ width: "100%" }}></img>
        </div>
        <div class="container">
          <div class="post" style={{ textalign: "justify" }}>
            <div class="header">
              <h1 class="py-4" style={{ fontWeight: 500, color: "#A4303F" }}>
                Cyber Crime
              </h1>
            </div>
            <p
              style={{
                fontsize: "20px",
                textalign: "justify",
                padding: "10px",
              }}
            >
              Cybercrime, especially involving the Internet, represents an
              extension of existing criminal behaviour alongside some novel
              illegal activities. The connection between internet ecosystems
              forms cyberspace. The threat to cyberspace leads to an issue and
              gives rise to the need for cybersecurity.
            </p>
            <p
              style={{
                fontsize: "20px",
                textalign: "justify",
                padding: "10px",
              }}
            >
              Most cybercrime is an attack on information about individuals,
              corporations, or governments. Although the attacks do not take
              place on a physical body, they do take place on the personal or
              corporate virtual body, which is the set of informational
              attributes that define people and institutions on the Internet.
            </p>
            <hr></hr>
            <h2 class="title">
              <span style={{ color: "#A4303F" }}>
                The need of cyber security{" "}
              </span>
            </h2>{" "}
            <hr />
            <p
              style={{
                fontsize: "30px",
                textAlign: "justify",
                padding: "5px",
                fontWeight: "bold",
              }}
            >
              {" "}
              ⇒ Cyber Security protects the cyberspace from the following :
            </p>
            <p
              style={{
                fontsize: "30px",
                textAlign: "justify",
                padding: "10px",
              }}
            >
              {" "}
              <b>1) Cyber Attacks : </b> A cyber attack is a set of actions
              performed by threat actors, who try to gain unauthorized access,
              steal data or cause damage to computers, computer networks, or
              other computing systems.The individuals who launch cyber attacks
              are usually referred to as cybercriminals, threat actors, bad
              actors, or hackers.
            </p>
            <p
              style={{
                fontsize: "30px",
                textAlign: "justify",
                padding: "10px",
              }}
            >
              {" "}
              <b>2)Damage to Cyberspace : </b> Damage to cyberspace can
              encompass a range of issues, including cyber threats, attacks, and
              vulnerabilities.Addressing damage to cyberspace requires a
              multifaceted approach involving cybersecurity measures,
              international cooperation, legislative frameworks.
            </p>
            <p
              style={{
                fontsize: "30px",
                textAlign: "justify",
                padding: "10px",
              }}
            >
              {" "}
              <b>3) Misuse of Cyberspace : </b> The misuse of cyberspace refers
              to various activities that exploit digital platforms and networks
              for malicious or harmful purposes. As technology advances, so do
              the methods employed by individuals or groups engaging in cyber
              misconduct.
            </p>
            <p
              style={{
                fontsize: "30px",
                textAlign: "justify",
                padding: "10px",
              }}
            >
              <b>4) Economic Espionage : </b> Economic espionage refers to the
              act of stealing trade secrets, proprietary information,
              intellectual property (IP), or confidential business strategies
              from companies, governments, or institutions to use it to gain a
              competitive advantage, often for the benefit of another company or
              country.
            </p>
            <hr></hr>
            <h2 class="title">
              <span style={{ color: "#A4303F" }}>
                Cyber Security - Evolution{" "}
              </span>
            </h2>{" "}
            <hr />
            <p
              style={{
                fontsize: "30px",
                textAlign: "justify",
                padding: "10px",
              }}
            >
              <b>
                With the introduction of cyberattacks, cybersecurity initiatives
                have evolved. They are mentioned in the table below:
              </b>
            </p>
            <table
              class="table table-bordered"
              style={{ border: "1px solid black" }}
            >
              <tbody>
                <tr>
                  <th
                    colspan="2"
                    style={{
                      textAlign: "center",
                      backgroundColor: "#BA68C8",
                      color: "white",
                    }}
                  >
                    Evolution of Cyber Security
                  </th>
                </tr>

                <tr>
                  <td style={{ textAlign: "center" }}>
                    <strong>Issues</strong>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <strong>Cyber Security Initiatives</strong>
                  </td>
                </tr>

                <tr>
                  <td>Virus (1990s)</td>
                  <td>
                    <ul>
                      <li>Anti-Virus</li>
                      <li>Firewalls</li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td>Worms (2000s)</td>
                  <td>
                    <ul>
                      <li>Intrusion Detection and Prevention</li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td>Botnets (2000s – Present)</td>
                  <td>
                    <ul>
                      <li>DLP, Application-aware Firewalls, SIM</li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td>APT Insiders (Present)</td>
                  <td>
                    <ul>
                      <li> Network Flow Analysis</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr></hr>
            <h2 class="title">
              <span style={{ color: "#A4303F" }}>Cyber Threats </span>
            </h2>{" "}
            <hr />
            <p
              style={{
                fontsize: "30px",
                textAlign: "justify",
                padding: "10px",
              }}
            ></p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cybercrime;
