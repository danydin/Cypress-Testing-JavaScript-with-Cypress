import NavItem from "./NavItem"

const navItems = [
    {
        label: 'Why Cypress?',
        path: '/',
        dataTest: 'why-cypress-page'
    },
    {
        label: 'Overview',
        path: '/overview',
        dataTest: 'overview-page'
    },
    {
        label: 'Fundamentals',
        path: '/fundamentals',
        dataTest: 'fundamentals-page',
    },
    {
        label: 'Forms',
        path: '/forms',
        dataTest: 'forms-page',
    },
    {
        label: 'Examples',
        path: '/examples',
        dataTest: 'examples-page',
    },
    {
        label: 'Component',
        path: '/component',
        dataTest: 'component-page'
    },
    {
        label: 'Best Practices',
        path: '/best-practices',
        dataTest: 'best-practices-page'
    },
]

export default function NavBar(){
    return (
        <ul className="nav-bar">
            {
                navItems.map((item)=> (
                    <NavItem dataTest={item.dataTest} key={item.label} label={item.label} path={item.path} />
                ))
            }
        </ul>
    )
}