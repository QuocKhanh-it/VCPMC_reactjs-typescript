


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
    w? : number
    data? : Array<{value: string, label: string}>
  }

  interface DataTypeKhobG {
    key: number;
    tenBG: string;
    maISRC: string;
    thoiLuong: string;
    casi: string;
    tacgia: string;
    theLoai: string;
    dinhDang: string;
    hieuLuc: number;
    ngayHetHan: string;
    soHD: string
  }
  interface DataTypePlayList {
    key: number;
    title: string;
    soBG: string;
    thoiLuong: string;
    chuDe: Array<string>;
    ngayTao: string;
    nguoiTao: string;

  }