class Controller {
  static instance: Controller
  private style: string
  private children: any
  private onClick: any
  constructor() {
  }

  public static getInstance(props) {
    if(!this.instance)
      this.instance = new Controller()
    this.instance.refreshData(props)
    return this.instance
  }
  refreshData({children, className, flex, mt1, mb1, ms1, me1, mx1, my1, m1, mis1, mie1, mpb1,
    p1, pt1, pb1, ps1, pe1, px1, py1, mt2, mb2, ms2, me2, mx2, my2, m2, mis2, mie2,
    p2, pt2, pb2, ps2, pe2, px2, py2, mt3, mb3, ms3, me3, mx3, my3, m3, mis3, mie3,
    p3, pt3, pb3, ps3, pe3, px3, py3, ppx1, Wfill, border, boxShadow, contentCenter, onClick,
    col, col1, col2, col3, col4, col5, col6, col7, col8, col9, col10, col11, col12,
    colMd, colMd1, colMd2, colMd3, colMd4, colMd5, colMd6, colMd7, colMd8, colMd9, colMd10, colMd11, colMd12,
    colSm, colSm1, colSm2, colSm3, colSm4, colSm5, colSm6, colSm7, colSm8, colSm9, colSm10, colSm11, colSm12,
  }) {
      this.children = children
      this.onClick = onClick
      this.style = `${className}`
      this.style = `${this.style} ${flex ? 'd-flex': ''}`.trim()
      this.style = `${this.style} ${m1 ? 'm-1': ''}`.trim()
      this.style = `${this.style} ${mis1 ? 'mis-1': ''}`.trim()
      this.style = `${this.style} ${mie1 ? 'mie-1': ''}`.trim()
      this.style = `${this.style} ${mt1 ? 'mt-1': ''}`.trim()
      this.style = `${this.style} ${mb1 ? 'mb-1': ''}`.trim()
      this.style = `${this.style} ${ms1 ? 'ms-1': ''}`.trim()
      this.style = `${this.style} ${me1 ? 'me-1': ''}`.trim()
      this.style = `${this.style} ${mx1 ? 'mx-1': ''}`.trim()
      this.style = `${this.style} ${my1 ? 'my-1': ''}`.trim()
      this.style = `${this.style} ${p1 ? 'p-1': ''}`.trim()
      this.style = `${this.style} ${pt1 ? 'pt-1': ''}`.trim()
      this.style = `${this.style} ${pb1 ? 'pb-1': ''}`.trim()
      this.style = `${this.style} ${ps1 ? 'ps-1': ''}`.trim()
      this.style = `${this.style} ${pe1 ? 'pe-1': ''}`.trim()
      this.style = `${this.style} ${py1 ? 'py-1': ''}`.trim()
      this.style = `${this.style} ${px1 ? 'px-1': ''}`.trim()
      
      this.style = `${this.style} ${m2 ? 'm-2': ''}`.trim()
      this.style = `${this.style} ${mis2 ? 'mis-2': ''}`.trim()
      this.style = `${this.style} ${mie2 ? 'mie-2': ''}`.trim()
      this.style = `${this.style} ${mt2 ? 'mt-2': ''}`.trim()
      this.style = `${this.style} ${mb2 ? 'mb-2': ''}`.trim()
      this.style = `${this.style} ${ms2 ? 'ms-2': ''}`.trim()
      this.style = `${this.style} ${me2 ? 'me-2': ''}`.trim()
      this.style = `${this.style} ${mx2 ? 'mx-2': ''}`.trim()
      this.style = `${this.style} ${my2 ? 'my-2': ''}`.trim()
      this.style = `${this.style} ${p2 ? 'p-2': ''}`.trim()
      this.style = `${this.style} ${pt2 ? 'pt-2': ''}`.trim()
      this.style = `${this.style} ${pb2 ? 'pb-2': ''}`.trim()
      this.style = `${this.style} ${ps2 ? 'ps-2': ''}`.trim()
      this.style = `${this.style} ${pe2 ? 'pe-2': ''}`.trim()
      this.style = `${this.style} ${py2 ? 'py-2': ''}`.trim()
      this.style = `${this.style} ${px2 ? 'px-2': ''}`.trim()
      
      this.style = `${this.style} ${m3 ? 'm-3': ''}`.trim()
      this.style = `${this.style} ${mis3 ? 'mis-3': ''}`.trim()
      this.style = `${this.style} ${mie3 ? 'mie-3': ''}`.trim()
      this.style = `${this.style} ${mt3 ? 'mt-3': ''}`.trim()
      this.style = `${this.style} ${mb3 ? 'mb-3': ''}`.trim()
      this.style = `${this.style} ${ms3 ? 'ms-3': ''}`.trim()
      this.style = `${this.style} ${me3 ? 'me-3': ''}`.trim()
      this.style = `${this.style} ${mx3 ? 'mx-3': ''}`.trim()
      this.style = `${this.style} ${my3 ? 'my-3': ''}`.trim()
      this.style = `${this.style} ${p3 ? 'p-3': ''}`.trim()
      this.style = `${this.style} ${pt3 ? 'pt-3': ''}`.trim()
      this.style = `${this.style} ${pb3 ? 'pb-3': ''}`.trim()
      this.style = `${this.style} ${ps3 ? 'ps-3': ''}`.trim()
      this.style = `${this.style} ${pe3 ? 'pe-3': ''}`.trim()
      this.style = `${this.style} ${py3 ? 'py-3': ''}`.trim()
      this.style = `${this.style} ${px3 ? 'px-3': ''}`.trim()

      this.style = `${this.style} ${ppx1 ? 'ppx-1': ''}`.trim()
      this.style = `${this.style} ${mpb1 ? 'mpb-1': ''}`.trim()
      this.style = `${this.style} ${Wfill ? 'w-fill': ''}`.trim()

      this.style = `${this.style} ${border ? 'border': ''}`.trim()
      this.style = `${this.style} ${boxShadow ? 'box-shadow': ''}`.trim()
      this.style = `${this.style} ${contentCenter ? 'content-center': ''}`.trim()

      this.style = `${this.style} ${col ? 'col': ''}`.trim()
      this.style = `${this.style} ${col1 ? 'col-1': ''}`.trim()
      this.style = `${this.style} ${col2 ? 'col-2': ''}`.trim()
      this.style = `${this.style} ${col3 ? 'col-3': ''}`.trim()
      this.style = `${this.style} ${col4 ? 'col-4': ''}`.trim()
      this.style = `${this.style} ${col5 ? 'col-5': ''}`.trim()
      this.style = `${this.style} ${col6 ? 'col-6': ''}`.trim()
      this.style = `${this.style} ${col7 ? 'col-7': ''}`.trim()
      this.style = `${this.style} ${col8 ? 'col-8': ''}`.trim()
      this.style = `${this.style} ${col9 ? 'col-9': ''}`.trim()
      this.style = `${this.style} ${col10 ? 'col-10': ''}`.trim()
      this.style = `${this.style} ${col11 ? 'col-11': ''}`.trim()
      this.style = `${this.style} ${col12 ? 'col-12': ''}`.trim()
      
      this.style = `${this.style} ${colMd ? 'col-md': ''}`.trim()
      this.style = `${this.style} ${colMd1 ? 'col-md-1': ''}`.trim()
      this.style = `${this.style} ${colMd2 ? 'col-md-2': ''}`.trim()
      this.style = `${this.style} ${colMd3 ? 'col-md-3': ''}`.trim()
      this.style = `${this.style} ${colMd4 ? 'col-md-4': ''}`.trim()
      this.style = `${this.style} ${colMd5 ? 'col-md-5': ''}`.trim()
      this.style = `${this.style} ${colMd6 ? 'col-md-6': ''}`.trim()
      this.style = `${this.style} ${colMd7 ? 'col-md-7': ''}`.trim()
      this.style = `${this.style} ${colMd8 ? 'col-md-8': ''}`.trim()
      this.style = `${this.style} ${colMd9 ? 'col-md-9': ''}`.trim()
      this.style = `${this.style} ${colMd10 ? 'col-md-10': ''}`.trim()
      this.style = `${this.style} ${colMd11 ? 'col-md-11': ''}`.trim()
      this.style = `${this.style} ${colMd12 ? 'col-md-12': ''}`.trim()
      
      this.style = `${this.style} ${colSm ? 'col-sm': ''}`.trim()
      this.style = `${this.style} ${colSm1 ? 'col-sm-1': ''}`.trim()
      this.style = `${this.style} ${colSm2 ? 'col-sm-2': ''}`.trim()
      this.style = `${this.style} ${colSm3 ? 'col-sm-3': ''}`.trim()
      this.style = `${this.style} ${colSm4 ? 'col-sm-4': ''}`.trim()
      this.style = `${this.style} ${colSm5 ? 'col-sm-5': ''}`.trim()
      this.style = `${this.style} ${colSm6 ? 'col-sm-6': ''}`.trim()
      this.style = `${this.style} ${colSm7 ? 'col-sm-7': ''}`.trim()
      this.style = `${this.style} ${colSm8 ? 'col-sm-8': ''}`.trim()
      this.style = `${this.style} ${colSm9 ? 'col-sm-9': ''}`.trim()
      this.style = `${this.style} ${colSm10 ? 'col-sm-10': ''}`.trim()
      this.style = `${this.style} ${colSm11 ? 'col-sm-11': ''}`.trim()
      this.style = `${this.style} ${colSm12 ? 'col-sm-12': ''}`.trim()
  } 

  public getStyle = () => this.style
  public getChildren = () => this.children
  public getOnClick = () => this.onClick
}

export default Controller