


export interface IParams {
    page?: string
    control?: string
    tag?: string
    id?: string
    action? : string
  }

  export interface IProfile {
    email: string
    id: string
    name: string
    password: string
    phone: string
    role: string
    username: string
    avatar: string
  }
  export interface ISelect {
    title?: string 
    data? : Array<{value: string, label: string}>
  }