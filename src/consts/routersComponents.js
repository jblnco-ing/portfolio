import projects from './projects'

 const routersComponents = projects.map((project) => (
    {
        component: project.pageComponent,
        point: project.point,
    }
));
export default routersComponents;