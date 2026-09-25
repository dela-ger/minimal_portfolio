export interface Project {
  id: number;
  title: string;
  client: string;
  description: string;
  category: string;
  status: 'Completed' | 'Completed / Demo' | 'Currently Developing';
  url: string;
  image: string;
  technologies: string[];
  featured: boolean;
}

export const currentProject: Project = {
  id: 0,
  title: 'Investment Management Platform',
  client: 'Innova Labs',
  description: 'Currently developing an investment management application for Innova Labs, focused on digital investment workflows and financial management.',
  category: 'Web Application',
  status: 'Currently Developing',
  url: '',
  image: 'https://image.qwenlm.ai/generated-images/8648b884-9204-41c5-9be3-ea10e58f0908/_result.png',
  technologies: [],
  featured: true,
};

export const completedProjects: Project[] = [
  {
    id: 1,
    title: "Lolo's Auto Store",
    client: "Lolo's Auto Store",
    description: 'An inventory management system designed for an automotive store to manage products, stock levels, sales, suppliers, users and inventory activity.',
    category: 'Web Application',
    status: 'Completed / Demo',
    url: 'https://lolosauto.netlify.app/login',
    image: 'https://image.qwenlm.ai/generated-images/0ecbab70-4d3e-4932-90e4-96e1d4ea418f/_result.png',
    technologies: ['React', 'Tailwind CSS', 'Express'],
    featured: true,
  },
  {
    id: 2,
    title: 'Sunwin Security Services',
    client: 'Sunwin Security Services',
    description: 'A professional website developed as the digital presence for Sunwin Security Services.',
    category: 'Website',
    status: 'Completed',
    url: 'https://sunwinsecurity.com.gh/',
    image: 'https://image.qwenlm.ai/generated-images/a386ea70-32d3-4148-9e8f-2ded87dc25c0/_result.png',
    technologies: [],
    featured: true,
  },
  {
    id: 3,
    title: 'Talitha',
    client: 'Talitha',
    description: 'A digital platform and web application developed for Talitha.',
    category: 'Web Application',
    status: 'Completed',
    url: 'https://talithaheart.netlify.app/',
    image: 'https://image.qwenlm.ai/generated-images/353f144e-258c-489b-8ba8-ccf262ac3fd4/_result.png',
    technologies: [],
    featured: true,
  },
  {
    id: 4,
    title: 'Global Radiance Consultancy',
    client: 'Global Radiance Consultancy',
    description: 'A professional website developed for Global Radiance Consultancy.',
    category: 'Website',
    status: 'Completed',
    url: 'https://globalradianceconsultancy.com/',
    image: 'https://image.qwenlm.ai/generated-images/9073b079-54e6-4fcc-8aa5-92bba8cc2433/_result.png',
    technologies: [],
    featured: true,
  },
  {
    id: 5,
    title: 'CMHDA',
    client: 'Christian Mission & Human Development Agency',
    description: 'A website developed for the Christian Mission & Human Development Agency.',
    category: 'Website',
    status: 'Completed',
    url: 'https://christianmissionsagency.org/',
    image: 'https://image.qwenlm.ai/generated-images/601309e5-0b05-42ae-9631-3059af89781f/_result.png',
    technologies: [],
    featured: true,
  },
  {
    id: 6,
    title: 'Summit Performance & Transformation Consult',
    client: 'Summit Performance & Transformation Consult',
    description: 'A modern corporate website developed for Summit Performance & Transformation Consult.',
    category: 'Website',
    status: 'Completed',
    url: 'https://summitgh.netlify.app/',
    image: 'https://image.qwenlm.ai/generated-images/61d672f1-4d34-4a78-a4b7-9311b381db30/_result.png',
    technologies: [],
    featured: true,
  },
  {
    id: 7,
    title: 'GHAMASWA',
    client: 'Ghana Maritime Authority Staff Welfare Association',
    description: 'A digital platform developed for the Ghana Maritime Authority Staff Welfare Association.',
    category: 'Web Application / Website',
    status: 'Completed',
    url: 'https://ghamaswa.netlify.app/',
    image: 'https://image.qwenlm.ai/generated-images/9277c608-cccf-4de0-87f3-6eb7d6a3a7f0/_result.png',
    technologies: [],
    featured: true,
  },
  {
    id: 8,
    title: 'SHINE',
    client: 'SHINE',
    description: 'A modern web application developed for SHINE.',
    category: 'Web Application',
    status: 'Completed',
    url: 'https://shinehiv.netlify.app/',
    image: 'https://image.qwenlm.ai/generated-images/1c9906ae-721e-4ae3-aee4-e92247cf47a8/_result.png',
    technologies: [],
    featured: true,
  },
];
