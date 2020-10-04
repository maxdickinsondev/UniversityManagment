import React, { useState } from "react";

import { Container, Title, table, td } from "./styles";

import { SegundaChamadaData } from "./data";

export default function segundaChamada() {
  return (
    <Container>
      <Title>Segunda Chamada</Title>
      {SegundaChamadaData.map((data, key) => {
        return (
          <div key={key}>
            <table>
              <tbody>
                <tr>
                  <th>Matéria</th>
                  <th>Professor</th>
                  <th>Data Limite</th>
                  <th>Ação</th>
                </tr>
                {
                  <tr>
                    <td>{data.materia}</td>
                    <td>{data.prof}</td>
                    <td>{data.dataLimite}</td>
                    <td>
                      <button disabled={data.podeFazer} className="sdf">
                        Solicitar
                      </button>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        );
      })}
    </Container>
  );
}
