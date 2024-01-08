export interface TypeNavLink {
  id: number,
  name: string,
  path: string
}

const navSite: Array<TypeNavLink> = [
  {
    id: 0,
    name: "JavaScript",
    path: "/js"
  },
  {
    id: 1,
    name: "React",
    path: "/react"
  },
  {
    id: 2,
    name: "Web",
    path: "/web",
  }
]

export default navSite;

