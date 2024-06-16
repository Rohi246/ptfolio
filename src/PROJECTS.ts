import React from 'react';
import n from './assets/project_imags/a.png';
type ProjectType = {
    imgurl: string;
    name: string;
    description: string;
    size:  'medium' | 'large';
  }
const projects:ProjectType[] = [
  {
    imgurl: n,
    name: "Alu ka chalu",
    description: "Bund pak pak and mand ka tolla teri bhen ko de dhakka tere bap piye mut mera",
    size: 'large'
  },
  {
    imgurl: n,
    name: "Alu ka chalu",
    description: "Bund pak pak",
    size: 'medium'
  },
  // Add more projects with different sizes
  {
    imgurl: n,
    name: "Project Example 1",
    description: "Example description",
    size: 'medium'
  },
  {
    imgurl: n,
    name: "Project Example 2",
    description: "Example description",
    size: 'large'
  }
];

export default projects;