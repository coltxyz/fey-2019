import React from 'react';

const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 275.82 190.62">
      <defs>
          <style>
              .cls-1 {
                  font-size: 60px;
                  fill: #231f20;
                  font-family: Monday-Light, Monday;
                  font-weight: 300;
              }
              .cls-2 {
                  letter-spacing: -0.02em;
              }
              .cls-3 {
                  letter-spacing: -0.03em;
              }
              .cls-4 {
                  letter-spacing: -0.01em;
              }
              .cls-5 {
                  letter-spacing: -0.02em;
              }
              .cls-6 {
                  letter-spacing: -0.03em;
              }
              .cls-7 {
                  letter-spacing: -0.01em;
              }
              .cls-8 {
                  letter-spacing: -0.04em;
              }
              .cls-9 {
                  letter-spacing: -0.01em;
              }
              .cls-10 {
                  letter-spacing: -0.08em;
              }
              .cls-11 {
                  letter-spacing: -0.04em;
              }
              .cls-12 {
                  letter-spacing: -0.11em;
              }
              .cls-13 {
                  letter-spacing: -0.03em;
              }
              .cls-14 {
                  letter-spacing: -0.02em;
              }
              .cls-15 {
                  letter-spacing: 0.03em;
              }
              .cls-16 {
                  letter-spacing: -0.04em;
              }
              .cls-17 {
                  letter-spacing: -0.03em;
              }
          </style>
      </defs>
      <title>Asset 1</title>
      <g id="Layer_2">
          <g id="Layer_1-2">
              <text class="cls-1" transform="translate(16.26 51)">
                  <tspan class="cls-2">Ch</tspan>
                  <tspan class="cls-3" x="80.28" y="0">â</tspan>
                  <tspan class="cls-4" x="110.82" y="0">t</tspan>
                  <tspan class="cls-5" x="132.18" y="0">e</tspan>
                  <tspan class="cls-6" x="162.3" y="0">a</tspan>
                  <tspan class="cls-7" x="192.84" y="0">u</tspan>
                  <tspan x="228.42" y="0"></tspan>
              </text>
              <text class="cls-1" transform="translate(43.02 111)">
                  <tspan class="cls-8">d</tspan>
                  <tspan class="cls-7" x="34.92" y="0">u</tspan>
                  <tspan class="cls-9" x="70.5" y="0"></tspan>
                  <tspan class="cls-10" x="84.06" y="0">F</tspan>
                  <tspan class="cls-11" x="118.38" y="0">e</tspan>
                  <tspan class="cls-12" x="147.6" y="0">ÿ</tspan>
                  <tspan x="173.94" y="0">,</tspan>
              </text>
              <text class="cls-1" transform="translate(0 171)">
                  <tspan class="cls-13">B</tspan>
                  <tspan x="39.12" y="0">u</tspan>
                  <tspan class="cls-14" x="75.24" y="0">r</tspan>
                  <tspan class="cls-15" x="101.22" y="0">g</tspan>
                  <tspan x="135.24" y="0">u</tspan>
                  <tspan class="cls-16" x="171.36" y="0">n</tspan>
                  <tspan class="cls-17" x="207" y="0">d</tspan>
                  <tspan x="242.22" y="0">y</tspan>
              </text>
          </g>
      </g>
  </svg>
`;

export default props => (
  <span dangerouslySetInnerHTML={{ __html: svg }} />
)
