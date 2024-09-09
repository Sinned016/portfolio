type Stack = {
  [key: string]: string
}

type Features = {
  [key: string]: string
}

export type ProjectsData = {
  id: string
  name: string
  description: string
  techStack: Stack[]
  features: Features[]
  image1: string
  image2: string
  linkToPage: string
}
