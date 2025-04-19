export interface NavLink {
 routerLink: string | string[]
 icon: string
 name: string
 tooltip: string
 clicked?: (params: any) => void
}
